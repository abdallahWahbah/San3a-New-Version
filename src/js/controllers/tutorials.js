import tutorialsModel from '../models/tutorialsModel';
import * as tutorialsView from '../views/tutorialsView';

export const getTutorialsAsync = async () =>
{
    let tutorialsObject = new tutorialsModel();

    try
    {
        await tutorialsObject.getTutorials();

        // get tutorials from the model
        let tutorials = tutorialsObject.results;
        tutorials = tutorials.filter(el => !el.video_url.includes("youtube"));
        console.log(tutorials);

        tutorials.forEach(current =>
        {
            tutorialsView.renderTutorial(current); 
        });
        handleSearch(tutorials);
    }
    catch(error)
    {
        console.log(error);
    }

}
getTutorialsAsync();


// handle clicking on video to move to video_show page
let tutCont = document.querySelector(".tutorials__container");
if(tutCont)
{
    tutCont.addEventListener("click", (e) =>
    {
        let id = e.target.closest(".tutorial").dataset.id;
        // console.log(id, typeof(id));
        location.href = `video_show.html?id=${Number(id)}`;
        
    });
}

// handle search and filter
let handleSearch = (tutorials) =>
{
    let filteredTutorials = [];
    
    if(!document.querySelector('.tutorial__search--icon')) return;
    document.querySelector('.tutorial__search--icon').addEventListener("click", (e) =>
    {
        e.preventDefault();
        // tutorialsView.clearTutrialList();
        document.querySelector(".tutorials__container").innerHTML=""
        let input = document.querySelector(".tutorial__input").value;
        input.toLowerCase();
        console.log(input);
        if(input !== "")
        {
            tutorials.forEach(current =>
            {
                current.title = current.title.toLowerCase();
                if(current.title.includes(input))
                {
                    filteredTutorials.push(current);
                    tutorialsView.clearTutrialList();
                    filteredTutorials.forEach(cur =>
                    {
                        tutorialsView.renderTutorial(cur); 
                    });
                }  
            })
        }

    })
}