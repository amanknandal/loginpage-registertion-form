const handleSubmit = (e) => {
    e.preventDefault();

    if (isForgotPassword) {
        // Handle forgot password logic
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');
            console.log("Resetting password for:", email);
        }
    } else if (isLogin) {
        // Handle login logic
        console.log("Logging in with password:", password);
    } else {
        // Handle registration logic
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            setError('');

            // Send data to backend to save in JSON file
            const newUser = {
                email,
                password
            };

            fetch('http://localhost:5000/save-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            })
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
                // Handle successful registration, e.g., show a success message
            })
            .catch((error) => {
                console.error('Error saving user data:', error);
                // Handle error
            });
        }
    }
};
