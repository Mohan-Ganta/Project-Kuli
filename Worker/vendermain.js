const posts = [
  {
    Timestamp: "2024-02-16 10:00:00",
    Name: "Mohan",
    phoneNumber: "9618850656",
    adharNumber: "1234 5678 9012",
    workType: "Driver",
    workDetails: "Being a driver is all about getting people or stuff from one place to another safely and smoothly. Whether you're driving your own car, a big truck, or even a bus, your job is to follow the rules of the road and make sure everyone gets where they need to go without any problems. Safety is super important, so you've got to pay attention and drive carefully all the time. Basically, you're like the captain of your vehicle, making sure everything runs like clockwork while keeping everyone safe on the journey.",
    workLocation: "City Taxi Service",
    dailyPay: "$100",
    numberOfWorkersNeeded: 2,
    image: "https://cdn1.vectorstock.com/i/1000x1000/95/55/happy-driver-is-driving-taxi-passenger-vector-18419555.jpg"
  },
  {
    Timestamp: "2024-02-16 10:00:00",
    Name: "Hani",
    phoneNumber: "9618850656",
    adharNumber: "1234 5678 9012",
    workType: "Tester",
    workDetails: "Being a driver is all about getting people or stuff from one place to another safely and smoothly. Whether you're driving your own car, a big truck, or even a bus, your job is to follow the rules of the road and make sure everyone gets where they need to go without any problems. Safety is super important, so you've got to pay attention and drive carefully all the time. Basically, you're like the captain of your vehicle, making sure everything runs like clockwork while keeping everyone safe on the journey.",
    workLocation: "City Taxi Service",
    dailyPay: "$100",
    numberOfWorkersNeeded: 2,
    image: "https://cdn1.vectorstock.com/i/1000x1000/95/55/happy-driver-is-driving-taxi-passenger-vector-18419555.jpg"
  },
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
    if (post.Name.toLowerCase().includes(searchTerm.toLowerCase()) || post.workType.toLowerCase().includes(searchTerm.toLowerCase())) {
      let postCard = document.createElement("div");
      postCard.classList.add("post");

      let image = document.createElement("img");
      image.src = post.image;

      let title = document.createElement("h3");
      title.innerHTML = post.workType;
      title.classList.add("post-title");

      let name = document.createElement("h3");
      name.innerHTML = post.Name;
      name.classList.add("post-Name");

      let adharNumber = document.createElement("div");
      adharNumber.innerHTML = `Adhar Number: ${post.adharNumber}`;
      adharNumber.classList.add("adhar-number");

      let workDetails = document.createElement("div");
      workDetails.innerHTML = `Work Details: ${post.workDetails}`;
      workDetails.classList.add("work-details");

      let workLocation = document.createElement("div");
      workLocation.innerHTML = `Work Location: ${post.workLocation}`;
      workLocation.classList.add("work-location");

      let dailyPay = document.createElement("div");
      dailyPay.innerHTML = `Daily Pay: ${post.dailyPay}`;
      dailyPay.classList.add("daily-pay");

      let numberOfWorkersNeeded = document.createElement("div");
      numberOfWorkersNeeded.innerHTML = `Number of Workers Needed: ${post.numberOfWorkersNeeded}`;
      numberOfWorkersNeeded.classList.add("number-of-workers-needed");

      // Phone Number with Anchor Tag
      let phoneNumber = document.createElement("a");
      phoneNumber.href = `tel:${post.phoneNumber}`;
      phoneNumber.innerHTML = `Phone Number: ${post.phoneNumber}`;
      phoneNumber.classList.add("phone-number");

      postCard.appendChild(title);
      postCard.appendChild(image);
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
