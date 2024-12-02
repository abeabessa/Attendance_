script.js

const ctx = document.getElementById('barChart');

new Chart(
    ctx, {
        type: 'bar',
        data:{
            labels: ["red", "blue", "yellow"],
            datasets: [
            {
                label: "Votes",
                data: [12,19,3],
                borderWidth: 2,
                backgroundColor: [
                'rgba(245, 0, 9, 0.45)',
            'rgba(5,0,249,0.45)',
        'rgba(250,250,5,0.45)'],
        borderColor: [
            'rgba(245,0,9)',
            'rgba(5,0,249)',
            'rgba(250,250,5)'
        ]
            }]
        }
    }
)