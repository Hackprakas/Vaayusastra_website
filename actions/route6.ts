"use server";

import prisma from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

async function getsession() {
    const session = await getServerSession();
    return session;
}

async function getusers() {
    const user = await getsession();
    const currentuser = user?.user?.email as string;
    try {
        if (!currentuser) {
            return {
                error: "No user found.",
            };
        }
        const check = await prisma.allowlist.findUnique({
            where: {
                email: currentuser,
            },
        });
        if (!check) {
            return {
                error: "You are not authorized to add users.",
            };
        } else if (check && check.read && check.write) {
            return {
                users: "users",
            };
        } else if (check && check.read && !check.write) {
            return {
                error: "You do not have write access.",
            };
        } else if (check && !check.read && check.write) {
            return {
                error: "You do not have read access.",
            };
        }
    } catch (e) {
        return {
            error: e,
        };
    }
}

export async function getdatetime() {
    const check = await getusers();
    if (check?.users) {
        const data = await prisma.students.findMany({
            select: {
                courseenrolleddate: true,
                courseenrolled: true,
            },
        });
        return data;
    } else if (check?.error) {
        return check?.error;
    }
}
export async function getdata() {
    const check = await getusers();
    if (check?.users) {
        const data = await prisma.students.findMany({
            select: {
                coursecompletedgrade: true,
            },
        });
        return data;
    } else if (check?.error) {
        return check.error;
    }
}
export async function getcollege() {
    const check = await getusers();
    if (check?.users) {
        const data = await prisma.students.findMany({
            select: {
                collegeName: true,
            },
        });
        return data;
    } else if (check?.error) {
        return check.error;
    }
}

export async function updateDeliveryStatus(formData: FormData) {
    const check = await getusers();
    if (check?.users) {
        const delivered = formData.get("delivered") === "on";
        const id = formData.get("id") as string;

        await prisma.orders.update({
            where: { id: id },
            data: { Delivered: delivered },
        });

        revalidatePath(`/order-details/${id}`);
        return true;
    } else if (check?.error) {
        return check.error;
    }
}

export async function updateQuantity(formData: FormData) {
    const check = await getusers();
    if (check?.users) {
        const quantity = formData.get("quantity") as string;
        const id = formData.get("id") as string;

        if (!quantity || !id) {
            throw new Error("Invalid data");
        }

        await prisma.product.update({
            where: { id: id },
            data: { Stock: parseInt(quantity) },
        });

        return true;
    } else if (check?.error) {
        return check.error;
    }
}
