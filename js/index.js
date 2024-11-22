document.addEventListener('DOMContentLoaded', function () {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log('Data loaded:', data); // Verify data is loaded correctly

            const dropdown = document.getElementById('parameterDropdown');
            const resultsDiv = document.getElementById('results');

            // Populate the dropdown with unique parameters
            const uniqueParameters = [...new Set(data.map(entry => entry.Parameter))];
            console.log('Unique parameters:', uniqueParameters); // Verify unique parameters

            // Sort the unique parameters alphabetically
            const sortedParameters = uniqueParameters.sort();
            console.log('Sorted parameters:', sortedParameters); // Verify sorted parameters

            // Populate the dropdown with sorted parameters
            sortedParameters.forEach(parameter => {
                const option = document.createElement('option');
                option.value = parameter;
                option.textContent = parameter;
                dropdown.appendChild(option);
            });

            // Handle search button click
            document.getElementById('searchButton').addEventListener('click', function () {
                const selectedParameter = dropdown.value;
                const filteredData = data.filter(entry => entry.Parameter === selectedParameter);
                console.log('Filtered data:', filteredData); // Check filtered results

                // Clear previous results
                resultsDiv.innerHTML = '';

                if (filteredData.length > 0) {
                    // Display the filtered results
                    filteredData.forEach(item => {
                        const resultHTML = `
                            <div>
                                <strong>Parameter:</strong> ${item.Parameter} <br>
                                <strong>Tech:</strong> ${item.Tech} <br>
                                <strong>Matrix:</strong> ${item.Matrix1} <br>
                                <strong>EPA Approved Method:</strong> ${item["EPA  Approved Method2"]} <br>
                                <strong>SW846 Method:</strong> ${item["SW846 Method3"]} <br>
                                <strong>Rec. Volume:</strong> ${item["Rec. Volume"]} <br>
                                <strong>Bottle Type:</strong> ${item["Bottle Type"]} <br>
                                <strong>Preservative:</strong> ${item["Preservative4"]} <br>
                                <strong>Temp:</strong> ${item.Temp} <br>
                                <strong>Holding Time:</strong> ${item["Holding Time"]} ${item["Holding Time Units"]}
                            </div>
                            <br>`;
                        resultsDiv.insertAdjacentHTML('beforeend', resultHTML);
                    });
                } else {
                    resultsDiv.textContent = 'No data found for the selected parameter.';
                }
            });
        })
        .catch(error => console.error('Error loading data:', error));
});
