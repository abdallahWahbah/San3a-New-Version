export let renderTutorial = (tutorial) =>
{
    const markup =
    `
    <div class="tutorial" data-id=${tutorial.id}>
        <video class="tutorial__video" controls>
            <source src="${tutorial.video_url}">
            Your browser does not support the video tag.
        </video>
        <div class="tutorial__name">${tutorial.title}</div>
    </div>
    `;
    document.querySelector(".tutorials__container").insertAdjacentHTML("beforeend", markup);
}

export let clearTutrialList = () =>
{
    document.querySelector(".tutorials__container").innerHTML="";
}