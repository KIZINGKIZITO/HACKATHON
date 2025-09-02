document.addEventListener('DOMContentLoaded', function() {
    const analyzeBtn = document.getElementById('analyze-btn');
    const problemInput = document.getElementById('problem-input');
    const solutionsOutput = document.getElementById('solutions-output');
    
    // Sample AI responses for demonstration
    const sampleResponses = [
        {
            problem: "drought",
            solution: "<div class='solution-card'><h3>Water Conservation Strategies</h3><p>For drought conditions, consider implementing drip irrigation systems to minimize water usage. Collect rainwater through storage systems and use drought-resistant crop varieties such as sorghum or millet. Practice mulching to reduce evaporation and improve soil moisture retention.</p></div>"
        },
        {
            problem: "soil",
            solution: "<div class='solution-card'><h3>Soil Improvement Techniques</h3><p>For sandy soil conditions, incorporate organic matter through composting to improve water retention and nutrient content. Consider planting cover crops like clover or legumes to fix nitrogen in the soil. Implement contour farming or terracing if dealing with erosion issues.</p></div>"
        },
        {
            problem: "community",
            solution: "<div class='solution-card'><h3>Community Food Security</h3><p>For community food shortages, establish community gardens to decentralize food production. Implement food preservation techniques like drying or canning to extend food availability. Develop a food sharing program and consider seed banks to preserve agricultural biodiversity.</p></div>"
        }
    ];
    
    analyzeBtn.addEventListener('click', function() {
        const problemText = problemInput.value.toLowerCase();
        
        if (!problemText) {
            solutionsOutput.innerHTML = '<p class="placeholder">Please enter a problem to analyze.</p>';
            return;
        }
        
        // Show loading state
        solutionsOutput.innerHTML = '<p class="placeholder">Analyzing your problem... (This would connect to an AI API in production)</p>';
        
        // Simulate API call delay
        setTimeout(() => {
            let solutions = '';
            
            // Check for keywords and add relevant sample solutions
            if (problemText.includes('drought') || problemText.includes('water')) {
                solutions += sampleResponses[0].solution;
            }
            
            if (problemText.includes('soil') || problemText.includes('sandy') || problemText.includes('erosion')) {
                solutions += sampleResponses[1].solution;
            }
            
            if (problemText.includes('community') || problemText.includes('shortage') || problemText.includes('people')) {
                solutions += sampleResponses[2].solution;
            }
            
            // If no specific keywords matched, show a default response
            if (!solutions) {
                solutions = "<div class='solution-card'><h3>General Food Security Approach</h3><p>Based on your problem description, consider implementing a diversified cropping system to enhance resilience. Explore local food processing and storage solutions to reduce post-harvest losses. Look into community-supported agriculture models to strengthen local food systems. Assess opportunities for integrating traditional knowledge with modern agricultural techniques for sustainable solutions.</p></div>";
            }
            
            solutionsOutput.innerHTML = solutions;
            
            // Add monetization elements
            solutionsOutput.innerHTML += `
                <div class="ad-container">
                    <h3>Recommended Resources</h3>
                    <div class="ad-placeholder">Sponsored Agricultural Products</div>
                </div>
                <p><em>For more detailed analysis and customized implementation plans, consider upgrading to our <a href="#pricing">Pro plan</a>.</em></p>
            `;
        }, 1500);
    });
    
    // Simulate user engagement for demo purposes
    const demoProblems = [
        "How can I improve crop yield in a drought-prone area with limited water resources?",
        "What are the best crops for sandy soil in tropical climates?",
        "Our community of 200 people needs to become more food independent. What steps should we take?",
    ];
    
    let currentDemoIndex = 0;
    
    // Rotate demo problems every 8 seconds
    setInterval(() => {
        problemInput.placeholder = demoProblems[currentDemoIndex];
        currentDemoIndex = (currentDemoIndex + 1) % demoProblems.length;
    }, 8000);
});