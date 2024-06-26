import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import Chart, { DoughnutChart, RadarChart } from '../components/chart';
import { Pies } from '../components/chart';
import { getcollege, getdata } from '@/actions/route6';

import { getdatetime } from '@/actions/route6';
import { adminNavigation } from '../constants';
import { BarChart } from '../components/barchart';



// AdminPage Component
const AdminPage = async () => {

  const datas = await getdatetime();
  console.log(datas);

  const monthCounts: { [key: string]: number } = {};
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  datas.forEach(item => {
    const date = new Date(item.courseenrolleddate);
    const month = date.getUTCMonth(); // getUTCMonth returns month index from 0 to 11
    const monthName = monthNames[month];

    if (monthCounts[monthName]) {
      monthCounts[monthName]++;
    } else {
      monthCounts[monthName] = 1;
    }
  });
  console.log(monthCounts);

  const length = Object.keys(datas).length;
  console.log(length);

  const courses: { [key: string]: number } = {};

  datas.forEach((item) => {
    const course = item.courseenrolled;

    if (courses[course]) {
      courses[course]++;
    } else {
      courses[course] = 1;
    }

  }
  );
  console.log(courses);
  const no = await getdata();
  console.log(no);
  const grades: { [key: string]: number } = {};

  no.forEach((item) => {
    const grade = item.coursecompletedgrade as string;
    console.log(grade);
    const highestGrade = ['S', 'A+'];
    if (highestGrade.includes(grade)) {
      if (grades[grade]) {
        grades[grade]++;
      }
      else {
        grades[grade] = 1;
      }
    }
  }
  );
  const result = Object.entries(grades).map(([grade, count]) => ({ grade, count }));  console.log(result);
  const count: { [key: string]: number } = {};
  var failing = 0;
  var total = 0;
  no.forEach((item) => {
    const grade = item.coursecompletedgrade as string;
    total++;
    if (grade !== 'U') {
      if (count[grade]) {
        count[grade]++;
      }
      else {
        count[grade] = 1;
      }
    }
    else {
      failing += 1;
    }
  });

  const passing = total - failing;
  const passPercentage = (passing / total) * 100;
  console.log(passPercentage);
  // console.log(no[0].coursecompletedgrade);
  // console.log(grades);
  const dataum = await getcollege();
  const colleges: { [key: string]: number } = {};
  dataum.forEach((item) => {
    const college = item.collegeName as string;
    if (colleges[college]) {
      colleges[college]++;
    } else {
      colleges[college] = 1;
    }
  });
  console.log(colleges);





  return (
    <div className='flex'>
      <Sidebar />
      <div className='block md:hidden lg:hidden '>
        <Navbar admin={true} data={adminNavigation} hide position />
      </div>
      <div className="flex  h-[calc(100vh-2rem)]  overflow-auto w-full px-5 py-28 lg:py-1 md:py-1">
        <div className="flex-1 p-6 bg-n-8 text-white ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6">
            <div className="bg-n-7 px-2 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4 mx-4 mt-4">Performance</h2>
              <Chart datas={monthCounts} />

            </div>

            <div className="bg-n-7 p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Number of Students Enrolled</h2>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-2xl font-bold">{length}</div>
                  <div className="text-gray-400">Total Students</div>
                </div>
              </div>
              <div className="w-full h-64 bg-purple text-white flex items-center justify-center rounded">

                <Pies datas={courses} />

              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:gird-cols-3 xl:grid-cols-3 gap-6 mt-6">
            <div className="bg-n-7 p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Toppers count</h2>
              <div className="w-full text-white flex items-center justify-center rounded">

                {/* <span className="text-sm">{result}</span> */}
                <BarChart value ={result}/>
              </div>
            </div>

            <div className="bg-n-7 p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Overall Pass Percentage</h2>
              <div className="w-full text-white flex items-center justify-center rounded">

                {/* <span className="text-sm">{passPercentage}</span> */}
                <DoughnutChart datas={passPercentage} />

              </div>
            </div>

            <div className="bg-n-7 p-6 rounded shadow-lg">
              <h2 className="text-xl font-bold mb-4">Top 5 School Students</h2>
              <div className="w-full text-white flex items-center justify-center rounded">

                {/* <span className="text-sm">Loading...</span> */}
                <RadarChart datas={colleges} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AdminPage;
