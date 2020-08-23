    // querySelector will return NodeList value. It is different from array
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate(){
      // dataset will return an object that contains values set in HTML: spacing(name, id, data)
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));