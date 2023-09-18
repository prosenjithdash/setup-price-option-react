import { LineChart as LChart , Line } from 'recharts';
const LineChart = () => {
    const studentMarks = [
        { name: 'Student 1', mathMarks: 85, physicsMarks: 90, chemistryMarks: 75 },
        { name: 'Student 2', mathMarks: 78, physicsMarks: 88, chemistryMarks: 70 },
        { name: 'Student 3', mathMarks: 92, physicsMarks: 94, chemistryMarks: 89 },
        { name: 'Student 4', mathMarks: 88, physicsMarks: 85, chemistryMarks: 78 },
        { name: 'Student 5', mathMarks: 76, physicsMarks: 82, chemistryMarks: 72 },
        { name: 'Student 6', mathMarks: 95, physicsMarks: 97, chemistryMarks: 91 },
        { name: 'Student 7', mathMarks: 89, physicsMarks: 91, chemistryMarks: 84 },
        { name: 'Student 8', mathMarks: 84, physicsMarks: 87, chemistryMarks: 79 },
        { name: 'Student 9', mathMarks: 70, physicsMarks: 75, chemistryMarks: 68 },
        { name: 'Student 10', mathMarks: 93, physicsMarks: 96, chemistryMarks: 88 }
      ];
      
    
    return (
        <div>
            <LChart width={500} height={400} data={studentMarks}>
                <Line dataKey="mathMarks" stroke='blue'></Line>
                <Line dataKey="physicsMarks" stroke='red'></Line>
                <Line dataKey="chemistryMarks" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;