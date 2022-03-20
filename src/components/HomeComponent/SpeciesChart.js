import React from "react";
import { useEffect } from "react";
import "./BgDetailsComponent/PopulationComponent/Population.scss";

import {
    Chart,
    BarElement,
    BarController,
    LinearScale,
    CategoryScale,
    Legend,
    Title,
} from "chart.js";
import { Autoplay } from "swiper";

function SpeciesChart(props) {
    useEffect(() => {
        console.log("inEffect");
        Chart.register(
            BarElement,
            BarController,
            LinearScale,
            CategoryScale,
            Legend,
            Title
        );
        const ctx = document.getElementById("myChart");
        const data = {
            labels: [
                "Waterfowl",
                "Birds of Prey",
                "Wetland Birds",
                "Seabirds",
                "Forest Birds",
                "All Other Birds",
                "Shoebirds",
                "Grassland Birds",
                "Aerial Insectivores",
                "Total (all species)",
            ],
            datasets: [
                {
                    label: "Increasing",
                    data: [
                        78.26, 78.57, 51.43, 31.58, 40.0, 35.29, 17.14, 13.64,
                        6.67, 38.35,
                    ],
                    backgroundColor: ["rgba(232, 245, 233, 1)"],
                    borderColor: ["rgba(0, 195, 94, 1)"],
                    borderWidth: 2,
                    // barThickness: 32
                },
                {
                    label: "Stable",
                    data: [
                        17.39, 14.29, 28.57, 47.37, 24.17, 25.49, 14.29, 13.64,
                        13.33, 24.19,
                    ],
                    backgroundColor: ["rgba(252, 251, 236, 1)"],
                    borderColor: ["rgba(253, 216, 53, 1)"],
                    borderWidth: 2,
                    // barThickness: 32
                },
                {
                    label: "Decreasing",
                    data: [
                        4.35, 7.14, 20.0, 21.05, 35.83, 39.22, 68.57, 72.73,
                        80.0, 37.46,
                    ],
                    backgroundColor: ["rgba(251, 233, 231, 1)"],
                    borderColor: ["rgba(216, 67, 21, 1)"],
                    borderWidth: 2,
                    // barThickness: 32
                },
            ],
        };
        const config = {
            type: "bar",
            data: data,
            options: {
                indexAxis: "y",
                plugins: {
                    legend: {
                        display: true,
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Number of species",
                    },
                },
                responsive: true,
                layout: {
                    padding: 0,
                },
                scales: {
                    x: {
                        stacked: true,
                        max: 100,
                    },
                    y: {
                        stacked: true,
                        max: 100,
                        beginAtZero: true,
                    },
                },
            },
        };
        const myChart = new Chart(ctx, config);
    }, [props]);
    const styles = {
        // padding: "20px 6vw",
    };
    return <canvas id="myChart" className="myChart" styles={styles}></canvas>;
}

export default SpeciesChart;
