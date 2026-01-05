document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the form element
    const leadForm = document.querySelector('.lead-form-box form');
    const formBox = document.querySelector('.lead-form-box');

    if (leadForm) {
        leadForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior (page reload)
            event.preventDefault();

            // Simple validation check
            const agencyName = leadForm.querySelector('input[type="text"]').value.trim();
            const email = leadForm.querySelector('input[type="email"]').value.trim();
            const region = leadForm.querySelector('select').value;

            if (!agencyName || !email || !region) {
                alert('Please fill out all fields before submitting.');
                return;
            }

            // 2. Process the Data (In a real scenario, you'd send this to a server/API)
            console.log('Form Submitted Successfully!');
            console.log('Agency:', agencyName);
            console.log('Email:', email);
            console.log('Region:', region);
            
            // 3. Clear the Form
            leadForm.reset();

            // 4. Display Success Message and Calendly Prompt
            const successMessageHTML = `
                <div class="submission-success">
                    <h3>✅ Success! Thank You for Partnering.</h3>
                    <p>We have received your details. A team member will review your request shortly.</p>
                    <p><strong>Next Step:</strong> To finalize your exclusive territory, please schedule a quick 15-minute qualification call now:</p>
                    <a href="YOUR_CALENDLY_LINK_HERE" target="_blank" class="btn btn-secondary">Schedule Qualification Call</a>
                </div>
            `;
            
            // Replace the form content with the success message
            formBox.innerHTML = successMessageHTML;

            // Optional: Hide the affiliate box content to focus attention (if needed)
            // document.querySelector('.affiliate-box').style.opacity = '0.5';
        });
    }
});