const posts = [
    {
    "Timestamp": "2024-02-14T06:30:53.463Z",
    "Name": "Mohammad Sabiha Sultana",
    "Phone Number": 7036420696,
    "Adhar Number": 24354466777,
    "WorkType": "web development",
    "workPlace": "nsp",
    "image": "url",
    "Proficiency": "fresher"
    },
    {
    "Timestamp": "2024-02-14T06:34:57.735Z",
    "Name": "b.yaswanth",
    "Phone Number": 7893336752,
    "Adhar Number": "9319 6585 6545",
    "WorkType": "it",
    "workPlace": "nsp",
    "image": "",
    "Proficiency": "fresher"
    },
    {
    "Timestamp": "2024-02-16T06:25:20.495Z",
    "Name": "Rakesh",
    "Phone Number": 9618850656,
    "Adhar Number": 884522755766,
    "WorkType": "Plamber",
    "workPlace": "Bhimavaram",
    "image": "",
    "Proficiency": "Expreince"
    },
    {
    "Timestamp": "2024-02-16T13:47:55.001Z",
    "Name": "ramu",
    "Phone Number": 9876858466,
    "Adhar Number": 637896381234,
    "WorkType": "carpenter",
    "workPlace": "narsapur",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T13:49:00.926Z",
    "Name": "raju",
    "Phone Number": 9876858466,
    "Adhar Number": 637896381234,
    "WorkType": "painter",
    "workPlace": "Bhimavaram",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T13:49:22.310Z",
    "Name": "geeta",
    "Phone Number": 9632587410,
    "Adhar Number": 563478652076,
    "WorkType": "care taker",
    "workPlace": "narasapuram",
    "image": "",
    "Proficiency": "Fresher"
    },
    {
    "Timestamp": "2024-02-16T13:50:27.184Z",
    "Name": "balu",
    "Phone Number": 9876858466,
    "Adhar Number": 637896381234,
    "WorkType": "mechanic",
    "workPlace": "Bhimavaram",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T13:50:56.791Z",
    "Name": "sahithi",
    "Phone Number": 7418529635,
    "Adhar Number": 251685267415,
    "WorkType": "electrician",
    "workPlace": "perupalem",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T13:51:21.348Z",
    "Name": "Ramya",
    "Phone Number": 9876858461,
    "Adhar Number": 637896381236,
    "WorkType": "mechanic",
    "workPlace": "Bhimavaram",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T13:52:00.190Z",
    "Name": "raju",
    "Phone Number": 9584230659,
    "Adhar Number": 985632548562,
    "WorkType": "plumber",
    "workPlace": "roypeta",
    "image": "",
    "Proficiency": "Fresher"
    },
    {
    "Timestamp": "2024-02-16T13:52:02.080Z",
    "Name": "Jaya",
    "Phone Number": 9876858468,
    "Adhar Number": 637896381236,
    "WorkType": "driver",
    "workPlace": "Bhimavaram",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T13:53:41.018Z",
    "Name": "vani",
    "Phone Number": 9563258410,
    "Adhar Number": 453269854202,
    "WorkType": "driver",
    "workPlace": "bhimavaram",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T13:54:04.810Z",
    "Name": "srinivas",
    "Phone Number": 9876858462,
    "Adhar Number": 637896381231,
    "WorkType": "Tution teacher",
    "workPlace": "palakollu",
    "image": "",
    "Proficiency": "fresher"
    },
    {
    "Timestamp": "2024-02-16T14:03:32.018Z",
    "Name": "srinu",
    "Phone Number": 9876858465,
    "Adhar Number": 637896381235,
    "WorkType": "Tution teacher",
    "workPlace": "palakollu",
    "image": "",
    "Proficiency": "fresher"
    },
    {
    "Timestamp": "2024-02-16T14:04:53.785Z",
    "Name": "sai",
    "Phone Number": 9876858463,
    "Adhar Number": 637896381237,
    "WorkType": "mechanic",
    "workPlace": "narsapur",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T14:07:20.642Z",
    "Name": "sai",
    "Phone Number": 9876858463,
    "Adhar Number": 637896381237,
    "WorkType": "mechanic",
    "workPlace": "narsapur",
    "image": "",
    "Proficiency": "experienced"
    },
    {
    "Timestamp": "2024-02-16T14:09:38.859Z",
    "Name": "kumari",
    "Phone Number": 9523625960,
    "Adhar Number": 563248952036,
    "WorkType": "painter",
    "workPlace": "seetharampuram",
    "image": "",
    "Proficiency": "experienced"
    }
    
];

const postsHeading = document.querySelector(".posts-list-container h2");
const postsContainer = document.querySelector(".posts-list-container .posts");
const postSearch = document.querySelector(".posts-list-container .post-search");

let searchTerm = "";

if (posts.length === 1) {
  postsHeading.innerHTML = `${posts.length} post`;
} else {
  postsHeading.innerHTML = `${posts.length} posts`;
}

const createPostListingCards = () => {
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    if (
      post.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.WorkType.toLowerCase().includes(searchTerm.toLowerCase()) // Corrected to use 'WorkType'
    ) {
      let postCard = document.createElement("div");
      postCard.classList.add("post");

      let image = document.createElement("img");
      image.src = post.image;

      let title = document.createElement("h3");
      title.innerHTML = post['WorkType'];
      title.classList.add("post-title");

      let name = document.createElement("h3");
      name.innerHTML = post.Name;
      name.classList.add("post-Name");


      let adharNumber = document.createElement("div");
      adharNumber.innerHTML = `Adhar Number: ${post["Adhar Number"]}`; // Corrected property name
      adharNumber.classList.add("adhar-number");

      let workPlace = document.createElement("div");
      workPlace.innerHTML = `workPlace: ${post.workPlace}`; // Corrected property name
      workPlace.classList.add("work-place");

      let proficiency = document.createElement("div");
      proficiency.innerHTML = `Proficiency: ${post.Proficiency}`; // Corrected property name
      proficiency.classList.add("proficiency");

      // Phone Number with Anchor Tag
      let phoneNumber = document.createElement("a");
      phoneNumber.href = `tel:${post["Phone Number"]}`; // Corrected property name with bracket notation
      phoneNumber.innerHTML = `Phone Number: ${post["Phone Number"]}`; // Corrected property name with bracket notation
      phoneNumber.classList.add("phone-number");

      let details = document.createElement("div");
      details.innerHTML = post.details;
      details.classList.add("details");

      postCard.appendChild(title);
      postCard.appendChild(image);
      postCard.appendChild(name);
      postCard.appendChild(adharNumber);
      postCard.appendChild(workPlace);
      postCard.appendChild(proficiency);
      postCard.appendChild(phoneNumber);
      

      postsContainer.appendChild(postCard);
    }
  });
};

createPostListingCards();

postSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createPostListingCards();
});
