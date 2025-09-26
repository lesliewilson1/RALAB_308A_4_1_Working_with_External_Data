import { appendCarousel, clear, createCarouselItem, start } from "./Carousel.js";


// import axios from "axios";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY = "live_VDqagZZHtTedn5o6ecdXIIrHDJVqGosPUzZWY96pUE2cTEtdQbhmTlpriArLTyUi";

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using fetch().
 * - Create new <options> for each of these breeds, and append them to breedSelect.- Loop to extract all elements
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */


//  async function initialLoad() {
//        const response = await fetch("https://api.thecatapi.com/v1/breeds")
//        const data = await response.json();
//        //console.log(data);

//       for (let i = 0; i < data.length; i++) {
//         const option = document.createElement("option");
//         const breed = data[i];
//         //console.log(breed);
//         option.setAttribute("value", breed.id);

//         option.textContent = breed.name;
//         breedSelect.appendChild(option);

//       }

      
//  }


// initialLoad()


/**
 * 2. Create an event handler for breedSelect that does the following:
 * - Retrieve information on the selected breed from the cat API using fetch().
 *  - Make sure your request is receiving multiple array items!
 *  - Check the API documentation if you're only getting a single object.
 * - For each object in the response array, create a new element for the carousel.
 *  - Append each of these new elements to the carousel.
 * - Use the other data you have been given to create an informational section within the infoDump element.
 *  - Be creative with how you create DOM elements and HTML.
 *  - Feel free to edit index.html and styles.css to suit your needs, but be careful!
 *  - Remember that functionality comes first, but user experience and design are important.
 * - Each new selection should clear, re-populate, and restart the Carousel.
 * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
 */

   
  //   breedSelect.addEventListener("change", async (e) => {
  //   e.preventDefault();
  //   clear();
  //   const breedId = e.target.value;
  //   const breedName = e.target.textContent;
  //   console.log(breedId);
  //   console.log(e.target);
  //   const selectBreed = await fetch(
  //     `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}&api_key=${API_KEY}`
  //   );
  //   const data = await selectBreed.json();
  //   console.log(data)
    
  //   data.forEach((element) => {
  //     const imgUrl = element.url;
  //     const imgId = element.id;

  //     const item = createCarouselItem(imgUrl, breedName, imgId);
  //     appendCarousel(item);


      
  //   });


  //       const newSection = document.createElement('section');
  //       let info = data[0].breeds[0];
  //       newSection.innerHTML = `<strong>Temperament:</strong> ${info.temperament}`;
  //       infoDump.innerHTML = "";
  //       // console.log(info);
  //       // newSection.textContent = info;
        
  //       infoDump.append(newSection);
  //       // console.log(newSection)
       
  // });


  

                                                                                //   breedSelect.addEventListener ("change", async () => {
                                                                                //   const selectedBreed = await fetch (`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedSelect.value}&api_key=${API_KEY}`);
                                                                                //   console.log(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedSelect.value}&api_key=${API_KEY}`)
                                                                                //   const catData = await selectedBreed.json();
                                                                                //   console.log(catData);
                                                                                // });





                                                                        // async function breedSelect() {
                                                                        //        const breedSelectResponse = await fetch("https://api.thecatapi.com/v1/breeds")
                                                                        //        const breedData = await response.json();
                                                                        //        //console.log(data);

                                                                        //       for (let i = 0; i < breedData.length; i++) {
                                                                        //         const breedSelectHandle = document.createElement("option");
                                                                        //         const breed = data[i];
                                                                        //         console.log(breed);
                                                                        //         option.setAttribute("value", breed.id);

                                                                        //         option.textContent = breed.name;
                                                                        //         breedSelect.appendChild(option);

                                                                        //       }

                                                                              
                                                                        //}



                                                                          // breedSelectHandle.addEventListener("click", handleBreedChange);

                                                                              //     async function breedCarousel() {
                                                                                  // }


                                                                                      // breedSelectHandle.addEventListener("click", initialLoad()) {



                                                                              // breedSelect.addEventListener("click", async function() {
                                                                              //         const selectBreed = await fetch ("https://api.thecatapi.com/v1/breeds" + "/api")
                                                                              //         console.log(selectBreed)

                                                                              // });
    


/**
 * 3. Fork your own sandbox, creating a new one named "JavaScript Axios Lab."
 */
/**
 * 4. Change all of your fetch() functions to axios!
 * - axios has already been imported for you within index.js.
 * - If you've done everything correctly up to this point, this should be simple.
 * - If it is not simple, take a moment to re-evaluate your original code.
 * - Hint: Axios has the ability to set default headers. Use this to your advantage
 *   by setting a default header with your API key so that you do not have to
 *   send it manually with all of your requests! You can also set a default base URL!
 */

 async function initialLoad() {
       const response = await axios ({
            method: `get`,
            url: `https://api.thecatapi.com/v1/breeds`
       }) 
       const data = response.data;
       //console.log(data);

      for (let i = 0; i < data.length; i++) {
        const option = document.createElement("option");
        const breed = data[i];
        //console.log(breed);
        option.setAttribute("value", breed.id);

        option.textContent = breed.name;
        breedSelect.appendChild(option);

      }

      
 }
 initialLoad();

    breedSelect.addEventListener("change", async (e) => {
    e.preventDefault();
    clear();
    const breedId = e.target.value;
    const breedName = e.target.textContent;
    console.log(breedId);
    console.log(e.target);
    const selectBreed = await axios({

        method: 'get',
        url: `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}&api_key=${API_KEY}`
        
    }
    ) 

    console.log(selectBreed);

    const data = selectBreed.data;
    console.log(data)
    
    data.forEach((element) => {
      const imgUrl = element.url;
      const imgId = element.id;

      const item = createCarouselItem(imgUrl, breedName, imgId);
      appendCarousel(item);


      
    });


        const newSection = document.createElement('section');
        let info = data[0].breeds[0];
        newSection.innerHTML = `<strong>Temperament:</strong> ${info.temperament}`;
        infoDump.innerHTML = "";
        // console.log(info);
        // newSection.textContent = info;
        
        infoDump.append(newSection);
        // console.log(newSection)



      
  }

);
// Progress Bar

   const options = {
    onDownloadProgress: function updateProgress(progressEvent) {
      //console.log(progressEvent);
      const percentComplete = Math.floor((progressEvent.loaded / progressEvent.total)*100);
      
    }
}
axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedSelect.value}&api_key=${API_KEY}`, options)
        .then(res => console.log(res))
        .catch(err => console.log(err))

/**
 * 5. Add axios interceptors to log the time between request and response to the console.
 * - Hint: you already have access to code that does this!
 * - Add a console.log statement to indicate when requests begin.
 * - As an added challenge, try to do this on your own without referencing the lesson material.
 */


/**
 * 6. Next, we'll create a progress bar to indicate the request is in progress.
 * - The progressBar element has already been created for you.
 *  - You need only to modify its "width" style property to align with the request progress.
 * - In your request interceptor, set the width of the progressBar element to 0%.
 *  - This is to reset the progress with each request.
 * - Research the axios onDownloadProgress config option.
 * - Create a function "updateProgress" that receives a ProgressEvent object.
 *  - Pass this function to the axios onDownloadProgress config option in your event handler.
 * - console.log your ProgressEvent object within updateProgess, and familiarize yourself with its structure.
 *  - Update the progress of the request using the properties you are given.
 * - Note that we are not downloading a lot of data, so onDownloadProgress will likely only fire
 *   once or twice per request to this API. This is still a concept worth familiarizing yourself
 *   with for future projects.
 */
//--------------------------------------Notes on Interceptors---------------------------------//
//Line 286 if(request.metadata){}
//else {request.metadata = {}} - if there isnt a value we can't give it a start time
//new date().getTime() - MDN Documentation
//interceptor when we get a requst stop then continue
//--------------------------------------Notes on Interceptors---------------------------------//
axios.interceptors.request.use(request => {
    //console.log(request);
    request.metadata = request.metadata || {};
    request.metadata.startTime = new Date().getTime();
    progressBar.style.width = "0%";
    return request;

  }
);

//--------------------------------------Notes on Interceptors---------------------------------//
  //when we get something back (response) axios says stop do the bottom and continue
//--------------------------------------Notes on Interceptors---------------------------------//

  axios.interceptors.response.use(
    (response) => {
        response.config.metadata.endTime = new Date().getTime();
        response.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;
        progressBar.style.width = "100%";

        return response;
    },
    (error) => {
        error.config.metadata.endTime = new Date().getTime();
        error.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;
        throw error;
  });
  (async () => {
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedSelect.value}&api_key=${API_KEY}`,
  
   response = await axios(url);
    console.log(`Request took ${response.durationInMS} milliseconds.`);
    // console.log(data);
  })();






/**
 * 7. As a final element of progress indication, add the following to your axios interceptors:
 * - In your request interceptor, set the body element's cursor style to "progress."
 * - In your response interceptor, remove the progress cursor style from the body element.
 */
/**
 * 8. To practice posting data, we'll create a system to "favourite" certain images.
 * - The skeleton of this function has already been created for you.
 * - This function is used within Carousel.js to add the event listener as items are created.
 *  - This is why we use the export keyword for this function.
 * - Post to the cat API's favourites endpoint with the given ID.
 * - The API documentation gives examples of this functionality using fetch(); use Axios!
 * - Add additional logic to this function such that if the image is already favourited,
 *   you delete that favourite using the API, giving this function "toggle" functionality.
 * - You can call this function by clicking on the heart at the top right of any image.
 */

//Created another function
export async function favourite(imgId) {
  // your code here
  const favourites = {
    image_id: imgId,
    sub_id: "MY_FAVOURITES"
  };


const response = await axios.get(
  `https://api.thecatapi.com/v1/favourites`,
    {headers: {
                'x-api-key': 'live_VDqagZZHtTedn5o6ecdXIIrHDJVqGosPUzZWY96pUE2cTEtdQbhmTlpriArLTyUi'
              }} 
);
 
  
  const favGroupResponse = response;
  const favGroup = favGroupResponse.data;

  let match = null;
  for (let i = 0; i < favGroup.length; i++) {
    const fav = favGroup[i];
    if (fav["image_id"] === imgId) {
      match = fav;
    }

    }

  if (match === null) {
           const response = await axios.post (
            `https://api.thecatapi.com/v1/favourites`,
            favourites,
            {
              headers: {
                'x-api-key': 'live_VDqagZZHtTedn5o6ecdXIIrHDJVqGosPUzZWY96pUE2cTEtdQbhmTlpriArLTyUi'
              }
            }
  );
          console.log("Favourite cat ₍^. .^₎⟆", response.data);
  } else {
     {const favouriteId = match;

    await axios.delete (
            `https://api.thecatapi.com/v1/favourites/${favouriteId}`,
            {
              headers: {
                'x-api-key': 'live_VDqagZZHtTedn5o6ecdXIIrHDJVqGosPUzZWY96pUE2cTEtdQbhmTlpriArLTyUi'
              }
            }
  );
            console.log("Unfavourited cat", favouriteId);
    }

    }




}

//--------------------------------------Notes on Axios---------------------------------//
//CRUD - CREATE, READ, UPDATE, DELETE - SOON
//create- post // delete - delete that post if-> if is is in fav post it if not in post in if function
//--------------------------------------Notes on Axios---------------------------------//

/**
 * 9. Test your favourite() function by creating a getFavourites() function.
 * - Use Axios to get all of your favourites from the cat API.
 * - Clear the carousel and display your favourites when the button is clicked.
 *  - You will have to bind this event listener to getFavouritesBtn yourself.
 *  - Hint: you already have all of the logic built for building a carousel.
 *    If that isn't in its own function, maybe it should be so you don't have to
 *    repeat yourself in this section.
 */


    function getFavourites () {

    }
/**
 * 10. Test your site, thoroughly!
 * - What happens when you try to load the Malayan breed?
 *  - If this is working, good job! If not, look for the reason why and fix it!
 * - Test other breeds as well. Not every breed has the same data available, so
 *   your code should account for this.
 *  Using CAT API you can display different kinds of data link breeds by using the & to combine
 * Create --> create document.id
 * 
 */
