function calculateBill() {
    // Get input values
    const customerName = document.getElementById('customerName').value;
    const customerId = document.getElementById('customerId').value;
    const units = parseFloat(document.getElementById('units').value);
    const connectionType = document.getElementById('connectionType').value;
    
    // Validate inputs
    if (!customerName || !customerId || isNaN(units) || units < 0) {
        alert('Please fill in all fields with valid values');
        return;
    }
    
    // Calculate base charge based on connection type and units consumed
    let baseCharge = 0;
    
    switch(connectionType) {
        case 'residential':
            if (units <= 100) {
                baseCharge = units * 4;
            } else if (units <= 200) {
                baseCharge = (100 * 4) + ((units - 100) * 5);
            } else if (units <= 300) {
                baseCharge = (100 * 4) + (100 * 5) + ((units - 200) * 6);
            } else {
                baseCharge = (100 * 4) + (100 * 5) + (100 * 6) + ((units - 300) * 7);
            }
            break;
            
        case 'commercial':
            if (units <= 100) {
                baseCharge = units * 5;
            } else if (units <= 200) {
                baseCharge = (100 * 5) + ((units - 100) * 6);
            } else if (units <= 300) {
                baseCharge = (100 * 5) + (100 * 6) + ((units - 200) * 7);
            } else {
                baseCharge = (100 * 5) + (100 * 6) + (100 * 7) + ((units - 300) * 8);
            }
            break;
            
        case 'industrial':
            if (units <= 100) {
                baseCharge = units * 6;
            } else if (units <= 200) {
                baseCharge = (100 * 6) + ((units - 100) * 7);
            } else if (units <= 300) {
                baseCharge = (100 * 6) + (100 * 7) + ((units - 200) * 8);
            } else {
                baseCharge = (100 * 6) + (100 * 7) + (100 * 8) + ((units - 300) * 9);
            }
            break;
    }
    
    // Calculate tax (5% of base charge)
    const tax = baseCharge * 0.05;
    
    // Calculate total amount
    const totalAmount = baseCharge + tax;
    
    // Display results
    document.getElementById('resultName').textContent = customerName;
    document.getElementById('resultId').textContent = customerId;
    document.getElementById('resultType').textContent = connectionType.charAt(0).toUpperCase() + connectionType.slice(1);
    document.getElementById('resultUnits').textContent = units.toFixed(2);
    document.getElementById('resultBase').textContent = baseCharge.toFixed(2);
    document.getElementById('resultTax').textContent = tax.toFixed(2);
    document.getElementById('resultTotal').textContent = totalAmount.toFixed(2);
    
    // Show result section
    document.getElementById('result').style.display = 'block';
}