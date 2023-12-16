const privacyPolicyLink = document.querySelector('.footer-privacy-policy');
const policyText = document.querySelector('.policy-text');
policyText.style.visibility = 'hidden'

function showPrivacyPolicy(event) {
    event.preventDefault();
   
    policyText.style.visibility = 'visible'
   
}

privacyPolicyLink.addEventListener('click', showPrivacyPolicy);