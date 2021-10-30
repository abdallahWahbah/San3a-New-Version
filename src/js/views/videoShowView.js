export let renderVideo = (video) =>
{
    const markup =
    `
        <video class="video" controls dataset-itemid=${video.id}>
            <source src="${video.video_url}">
            Your browser does not support the video tag.
        </video>
    `;
    document.querySelector(".video__container").insertAdjacentHTML("afterbegin", markup);
};
export let renderDescription = (video) =>
{
    document.querySelector(".video__paragraph").textContent = video.description;
};

export let renderRelatedVideo = (video) =>
{
    let markup= 
    `
        <div class="video__container" >
            <video id="myVideo" class = "video__container--video" controls>
                <source src="https://media.istockphoto.com/videos/young-woman-on-white-bed-knitting-in-bedroom-video-id1213148776">
                Your browser does not support the video tag.
            </video>
            <div class="discription_video" data-itemid = ${video.id}>
                <p>${video.title}</p>
            </div>
        </div>
    `;
    document.querySelector(".tutorials__container").insertAdjacentHTML("afterbegin", markup);
}

export let clearRelated =() =>
{
    document.querySelector(".tutorials__container").innerHTML="";
}