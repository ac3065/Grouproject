document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;

  if (email) {
      // Simulate sending OTP (in real scenario, backend call to send OTP)
      alert('OTP has been sent to ' + email);

      // Hide Forgot Password Form and Show OTP Form
      document.getElementById('forgotPasswordForm').style.display = 'none';
      document.getElementById('otpPasswordForm').style.display = 'flex';
  } else {
      alert('Please enter a valid email address.');
  }
});

document.getElementById('otpPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const otp = document.getElementById('otp').value;
  const newPassword = document.getElementById('newPassword').value;

  if (otp && newPassword) {
      // Simulate OTP validation and password reset (in real scenario, backend call)
      alert('Password has been reset successfully!');

      // Redirect to login page or show success message
  } else {
      alert('Please enter the OTP and a new password.');
  }
});
