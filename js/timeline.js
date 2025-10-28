document.addEventListener('DOMContentLoaded', function() {
    const milestones = [
        { date: 'Jul 21, 2024', event: 'Candidacy Declaration' },
        { date: 'Oct 2024', event: 'Sworn into Office' },
        { date: 'Apr 12, 2025', event: 'Tribunal Petition Dismissed' },
        { date: 'Sep 13, 2025', event: 'Healthcare Center Project' },
        { date: 'Sep 16, 2025', event: 'Musician Celebration Event' },
        { date: 'Sep 29, 2025', event: 'Ambulance & Bike Donation' },
        { date: 'Oct 7, 2025', event: 'One-Year Scorecard Release' }
    ];

    function renderTimeline(containerId, items = milestones) {
        const container = document.getElementById(containerId);
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'timeline-item';
            div.innerHTML = `
                <div class="timeline-dot"></div>
                <h5>${item.date}</h5>
                <p>${item.event}</p>
            `;
            container.appendChild(div);
        });
    }

    // Render on pages
    if (document.getElementById('timeline')) renderTimeline('timeline', milestones.slice(-3)); // Teaser: Last 3
    if (document.getElementById('full-timeline')) renderTimeline('full-timeline');
    if (document.getElementById('achievements-timeline')) renderTimeline('achievements-timeline');
});