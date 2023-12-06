import { Chart } from "chart.js/auto";
import { useState } from "react";
import { Line } from "react-chartjs-2";

function LineChart({labels, values}){

    var data = {
        labels: labels,
        datasets: [
            {
                label: "y(t)",
                data: values,
            }
        ]
    }

    return (
        <div>
            <Line
                data = {data}
            ></Line>
        </div>
    );
}

export default LineChart