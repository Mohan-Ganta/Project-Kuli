const posts = [
 
    {
    "Timestamp": "2024-02-14T06:01:56.831Z",
    "Name": "sabiha",
    "Phone Number": 2345678921,
    "Adhar Number": 2345464657,
    "Work Type": "Web Development",
    "Work Details": "To develop Website",
    "Work Location": "Nsp",
    "Daily Pay": 300,
    "Number  of Workers Need": 5
    },
    {
    "Timestamp": "2024-02-14T06:36:45.185Z",
    "Name": "yassus",
    "Phone Number": 7893336752,
    "Adhar Number": 645212554544,
    "Work Type": "it",
    "Work Details": "infosys",
    "Work Location": "vizag",
    "Daily Pay": "20k",
    "Number  of Workers Need": 7
    },
    {
    "Timestamp": "2024-02-16T06:24:12.584Z",
    "Name": "Mohan",
    "Phone Number": 9618850656,
    "Adhar Number": 884522755766,
    "Work Type": "Plamber",
    "Work Details": "Near Multiplex",
    "Work Location": "Bhimavaram",
    "Daily Pay": 1000,
    "Number  of Workers Need": 5
    },
    {
    "Timestamp": "2024-02-16T10:51:41.168Z",
    "Name": "Hello",
    "Phone Number": 9618850656,
    "Adhar Number": 884522755766,
    "Work Type": "Tester",
    "Work Details": "testing on web",
    "Work Location": "Chennai",
    "Daily Pay": 2000,
    "Number  of Workers Need": 5
    },
    {
    "Timestamp": "2024-02-16T13:47:32.797Z",
    "Name": "Hema",
    "Phone Number": 1234567890,
    "Adhar Number": 123443219876,
    "Work Type": "carpenter",
    "Work Details": "morning",
    "Work Location": "narsapur",
    "Daily Pay": 200,
    "Number  of Workers Need": 3
    },
    {
    "Timestamp": "2024-02-16T13:47:58.438Z",
    "Name": "rajesh",
    "Phone Number": 6305887876,
    "Adhar Number": 987654321456,
    "Work Type": "carpenter",
    "Work Details": "morning",
    "Work Location": "narasapur",
    "Daily Pay": 500,
    "Number  of Workers Need": 4
    },
    {
    "Timestamp": "2024-02-16T13:49:12.727Z",
    "Name": "raju",
    "Phone Number": 6305887879,
    "Adhar Number": 987654321457,
    "Work Type": "farmer",
    "Work Details": "morning",
    "Work Location": "narasapur",
    "Daily Pay": 400,
    "Number  of Workers Need": 3
    },
    {
    "Timestamp": "2024-02-16T13:53:10.943Z",
    "Name": "pavani",
    "Phone Number": 6305887875,
    "Adhar Number": 987654321453,
    "Work Type": "driver",
    "Work Details": "afternoon",
    "Work Location": "bhimavaram",
    "Daily Pay": 600,
    "Number  of Workers Need": 1
    },
    {
    "Timestamp": "2024-02-16T13:53:42.046Z",
    "Name": "Pavani",
    "Phone Number": 1234567891,
    "Adhar Number": 123443219875,
    "Work Type": "carpenter",
    "Work Details": "morning",
    "Work Location": "narsapur",
    "Daily Pay": 400,
    "Number  of Workers Need": 6
    },
    {
    "Timestamp": "2024-02-16T13:54:56.088Z",
    "Name": "hema",
    "Phone Number": 6305887871,
    "Adhar Number": 987654321467,
    "Work Type": "plumber",
    "Work Details": "afternoon",
    "Work Location": "palakolu",
    "Daily Pay": 600,
    "Number  of Workers Need": 2
    },
    {
    "Timestamp": "2024-02-16T13:55:13.164Z",
    "Name": "kesani",
    "Phone Number": 1234567892,
    "Adhar Number": 123443219880,
    "Work Type": "plumber",
    "Work Details": "afternoon",
    "Work Location": "Bhimavaram",
    "Daily Pay": 600,
    "Number  of Workers Need": 2
    },
    {
    "Timestamp": "2024-02-16T13:59:13.506Z",
    "Name": "kesani",
    "Phone Number": 6305887881,
    "Adhar Number": 987654321446,
    "Work Type": "electrician",
    "Work Details": "morning",
    "Work Location": "mogalthur",
    "Daily Pay": 500,
    "Number  of Workers Need": 4
    },
    {
    "Timestamp": "2024-02-16T14:00:01.600Z",
    "Name": "Jahnavi",
    "Phone Number": 1234567893,
    "Adhar Number": 123443219881,
    "Work Type": "Driver",
    "Work Details": "Morning",
    "Work Location": "Hyderabad",
    "Daily Pay": 900,
    "Number  of Workers Need": 1
    },
    {
    "Timestamp": "2024-02-16T14:00:13.645Z",
    "Name": "aneesha",
    "Phone Number": 6305887861,
    "Adhar Number": 987654321478,
    "Work Type": "painter",
    "Work Details": "morning",
    "Work Location": "mogalthur",
    "Daily Pay": 400,
    "Number  of Workers Need": 2
    },
    {
    "Timestamp": "2024-02-16T14:00:56.730Z",
    "Name": "Vaishnavi",
    "Phone Number": 1234567894,
    "Adhar Number": 123443219882,
    "Work Type": "care taker",
    "Work Details": "Morning",
    "Work Location": "Hyderabad",
    "Daily Pay": 500,
    "Number  of Workers Need": 2
    },
    {
    "Timestamp": "2024-02-16T14:01:21.484Z",
    "Name": "divya",
    "Phone Number": 6305887880,
    "Adhar Number": 987654321467,
    "Work Type": "care taker",
    "Work Details": "morning",
    "Work Location": "mogalthur",
    "Daily Pay": 400,
    "Number  of Workers Need": 1
    },
    {
    "Timestamp": "2024-02-16T14:01:55.670Z",
    "Name": "Aneesha",
    "Phone Number": 1234567895,
    "Adhar Number": 123443219883,
    "Work Type": "Electrician",
    "Work Details": "afternoon",
    "Work Location": "vijayawada",
    "Daily Pay": 300,
    "Number  of Workers Need": 1
    },
    {
    "Timestamp": "2024-02-16T14:03:00.483Z",
    "Name": "Yuva",
    "Phone Number": 1234567896,
    "Adhar Number": 123443219884,
    "Work Type": "Mechanic",
    "Work Details": "morning",
    "Work Location": "Bhimavaram",
    "Daily Pay": 500,
    "Number  of Workers Need": 1
    },
    {
    "Timestamp": "2024-02-16T14:03:17.216Z",
    "Name": "divya",
    "Phone Number": 6305887880,
    "Adhar Number": 987654321467,
    "Work Type": "Maid",
    "Work Details": "morning",
    "Work Location": "Hyderabad",
    "Daily Pay": 400,
    "Number  of Workers Need": 5
    },
    {
    "Timestamp": "2024-02-16T14:03:30.842Z",
    "Name": "divya",
    "Phone Number": 6305887880,
    "Adhar Number": 987654321467,
    "Work Type": "Maid",
    "Work Details": "morning",
    "Work Location": "Hyderabad",
    "Daily Pay": 400,
    "Number  of Workers Need": 5
    },
    {
    "Timestamp": "2024-02-16T14:04:43.754Z",
    "Name": "navya",
    "Phone Number": 6305887889,
    "Adhar Number": 987654321469,
    "Work Type": "baby sitter",
    "Work Details": "morning",
    "Work Location": "Hyderabad",
    "Daily Pay": 300,
    "Number  of Workers Need": 4
    },
    {
    "Timestamp": "2024-02-16T14:05:37.265Z",
    "Name": "Suryam",
    "Phone Number": 1234567897,
    "Adhar Number": 123443219885,
    "Work Type": "Beautician",
    "Work Details": "Evening",
    "Work Location": "Hyderabad",
    "Daily Pay": 800,
    "Number  of Workers Need": 2
    },
    {
    "Timestamp": "2024-02-16T14:08:20.700Z",
    "Name": "vaishnavi",
    "Phone Number": 6305887886,
    "Adhar Number": 987654321463,
    "Work Type": "Tution teacher",
    "Work Details": "evening",
    "Work Location": "anantapur",
    "Daily Pay": 200,
    "Number  of Workers Need": 4
    },
    {
    "Timestamp": "2024-02-16T14:09:12.698Z",
    "Name": "Chanti",
    "Phone Number": 1234567898,
    "Adhar Number": 123443219886,
    "Work Type": "carpenter",
    "Work Details": "morning",
    "Work Location": "Bhimavaram",
    "Daily Pay": 300,
    "Number  of Workers Need": 1
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

const createpostListingCards = () => {
  postsContainer.innerHTML = "";

  posts.forEach((post) => {
    if (post.Name.toLowerCase().includes(searchTerm.toLowerCase()) || post['Work Type'].toLowerCase().includes(searchTerm.toLowerCase())) {
      let postCard = document.createElement("div");
      postCard.classList.add("post");

      // You need to provide image URLs in your 'post' objects for this part to work
      // let image = document.createElement("img");
      // image.src = post.image;

      let title = document.createElement("h3");
      title.innerHTML = post['Work Type'];
      title.classList.add("post-title");

      let name = document.createElement("h3");
      name.innerHTML = post.Name;
      name.classList.add("post-Name");

      let adharNumber = document.createElement("div");
      adharNumber.innerHTML = `Adhar Number: ${post['Adhar Number']}`;
      adharNumber.classList.add("adhar-number");

      let workDetails = document.createElement("div");
      workDetails.innerHTML = `Work Details: ${post['Work Details']}`;
      workDetails.classList.add("work-details");

      let workLocation = document.createElement("div");
      workLocation.innerHTML = `Work Location: ${post['Work Location']}`;
      workLocation.classList.add("work-location");

      let dailyPay = document.createElement("div");
      dailyPay.innerHTML = `Daily Pay: ${post['Daily Pay']}`;
      dailyPay.classList.add("daily-pay");

      let numberOfWorkersNeeded = document.createElement("div");
      numberOfWorkersNeeded.innerHTML = `Number of Workers Needed: ${post['Number  of Workers Need']}`;
      numberOfWorkersNeeded.classList.add("number-of-workers-needed");

      // Phone Number with Anchor Tag
      let phoneNumber = document.createElement("a");
      phoneNumber.href = `tel:${post['Phone Number']}`;
      phoneNumber.innerHTML = `Phone Number: ${post['Phone Number']}`;
      phoneNumber.classList.add("phone-number");

      // Uncomment if you have image URLs
      // postCard.appendChild(image);

      postCard.appendChild(title);
      postCard.appendChild(name);
      postCard.appendChild(adharNumber);
      postCard.appendChild(workDetails);
      postCard.appendChild(workLocation);
      postCard.appendChild(dailyPay);
      postCard.appendChild(numberOfWorkersNeeded);
      postCard.appendChild(phoneNumber);

      postsContainer.appendChild(postCard);
    }
  });
};

createpostListingCards();

postSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createpostListingCards();
});

