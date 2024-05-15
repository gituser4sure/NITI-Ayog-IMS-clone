var select=document.getElementById('yearSelect');
                for(var year=1990; year<=2024; year++){
                    var option = document.createElement('option');

                    option.value = year;
                    option.text = year;

                    select.appendChild(option);
                }