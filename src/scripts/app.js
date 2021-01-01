const appHolder = document.getElementById('app');
const person = loadScript('./scripts/person.js', (error, success) => {
        if(error){
            showMesage('error during loading the person file', appHolder);
            return;
        }
        showMesage('person script file is loaded', appHolder);
        showPersonIsLoaded(appHolder);
        const timer = setTimeout(()=>{
            removeLoadedScript(person);
            showPersonIsLoaded(appHolder, 'Load again after removal of the script.');
            clearInterval(timer);
        }, 3000);
    }
);

