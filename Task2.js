
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        resetErrors();

        let isValid = true;

        const name = document.getElementById('name').value.trim();
        if (name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        } else if (!isValidName(name)) {
            showError('nameError', 'Name should contain only letters');
            isValid = false;
        }

        const email = document.getElementById('email').value.trim();
        if (email === '') {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }

        const phone = document.getElementById('phone').value.trim();
        if (phone !== '' && !isValidPhone(phone)) {
            showError('phoneError', 'Please enter a valid phone number');
            isValid = false;
        }

        const message = document.getElementById('message').value.trim();
        if (message === '') {
            showError('messageError', 'Message is required');
            isValid = false;
        }

        if (isValid) {
            window.alert('Form submitted successfully!');
        }
    });

    document.getElementById('addTodo').addEventListener('click', addTodo);
    document.getElementById('todoInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const input = document.getElementById('todoInput');
        const task = input.value.trim();

        if (task !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task}</span>
                <button class="delete-btn">Delete</button>
            `;

            document.getElementById('todoList').appendChild(li);
            input.value = '';

            li.querySelector('.delete-btn').addEventListener('click', function() {
                li.remove();
            });
        }
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function resetErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function isValidPhone(phone) {
        const phonePattern = /^[\d\s\-+()]{10,}$/;
        return phonePattern.test(phone);
    }

    function isValidName(name) {
        const namePattern = /^[a-zA-Z\s]+$/;
        return namePattern.test(name);
    };