from fastapi import FastAPI, Form, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
import bcrypt
import uuid
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

# MongoDB client setup
client = AsyncIOMotorClient(os.getenv("MONGO_URI"))
db = client["vaayusastra"]
users_collection = db["users"]

# Function to send email
async def send_email(email: str, reset_token: str):
    reset_url = f"{os.getenv('NEXTAUTH_URL')}/forgotpass/{reset_token}"
    
    # Create email content
    msg = MIMEMultipart()
    msg['From'] = os.getenv('EMAIL_USER')
    msg['To'] = email
    msg['Subject'] = 'Password Reset Request'
    body = f'<p>You requested a password reset. Click <a href="{reset_url}">here</a> to reset your password.</p> Note that this link is valid only for 5 minutes.'
    msg.attach(MIMEText(body, 'html'))
    
    try:
        # Setting up the SMTP server
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(os.getenv('EMAIL_USER'), os.getenv('EMAIL_PASS'))
        server.sendmail(msg['From'], msg['To'], msg.as_string())
        server.quit()

        return {"message": "Success! Check your email for a link to reset your password."}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email. Error: {str(e)}")


# API to request password reset
@app.post("/sendmail/")
async def sendmail(email: str = Form(...)):
    # Find the user in MongoDB
    user = await users_collection.find_one({"email": email})

    if not user:
        raise HTTPException(status_code=404, detail="No user found with that email.")

    # Generate reset token and expiry
    reset_token = str(uuid.uuid4())
    reset_token_expiry = datetime.utcnow() + timedelta(minutes=5)

    # Update user in MongoDB with reset token and expiry
    await users_collection.update_one(
        {"email": email},
        {"$set": {"resetToken": reset_token, "resetTokenExpiry": reset_token_expiry}}
    )

    # Send the password reset email
    return await send_email(email, reset_token)
