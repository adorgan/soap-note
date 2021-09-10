const toggleMultiSelect = (toggle, values, phrase, setFormFunction) => {
    const toggleInput = document.getElementById(toggle);
    const valuesMultiInput = document.getElementById(values);
  
    if (toggleInput.value === phrase) {
      // disable verbal cues given multi select and reset form value
      valuesMultiInput.disabled = true;
      valuesMultiInput.value = "";
      setFormFunction({
        name: values,
        value: [],
      });
    } else {
      // re-enable multi-select
      valuesMultiInput.disabled = false;
    }
  };

export default toggleMultiSelect;