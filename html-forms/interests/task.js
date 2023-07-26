const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('change', () => {
        //Check whether it is root checkbox or not
        if (input.closest('.interests_active')) {
            //Proceed with the child checkboxes
            let allChecked = true;
            let allUnchecked = true;
            //Check the states of child checkboxes and set the flag (all checked/all unchecked)
            input.closest('ul').querySelectorAll('.interest__check').forEach(checkbox => {
                if (checkbox.checked === false) {
                    allChecked = false;
                } else {
                    allUnchecked = false;
                }
            })
            //Find the root checkbox
            let rootCheckbox = input.closest('ul').closest('.interest').querySelector('.interest__check')
            //Based on the flag above determine the state of the root checkbox (checked/unchecked/indeterminate)
            if (allChecked) {
                rootCheckbox.checked = true;
                rootCheckbox.indeterminate = false;
            } else if (allUnchecked) {
                rootCheckbox.checked = false;
                rootCheckbox.indeterminate = false;
            } else {
                rootCheckbox.indeterminate = true;
                rootCheckbox.checked = false;
            }
        } else {
            //Proceed with the root checkboxF
            input.closest('.interest').querySelector('ul')
                .querySelectorAll('.interest__check')
                .forEach(checkbox => checkbox.checked = input.checked);
        }
    })
})