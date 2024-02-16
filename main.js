const posts = [
  {
    Name: "Mohan",
    title: "Driver",
    image: "https://cdn1.vectorstock.com/i/1000x1000/95/55/happy-driver-is-driving-taxi-passenger-vector-18419555.jpg",
    details: "Being a driver is all about getting people or stuff from one place to another safely and smoothly. Whether you're driving your own car, a big truck, or even a bus, your job is to follow the rules of the road and make sure everyone gets where they need to go without any problems. Safety is super important, so you've got to pay attention and drive carefully all the time. Basically, you're like the captain of your vehicle, making sure everything runs like clockwork while keeping everyone safe on the journey.",
    phoneNumber: "9618850656" // Add phone number here
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
    if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let postCard = document.createElement("div");
      postCard.classList.add("post");

      let image = document.createElement("img");
      image.src = post.image;

      let title = document.createElement("h3");
      title.innerHTML = post.title;
      title.classList.add("post-title");

      let Name = document.createElement("h3");
      Name.innerHTML = post.Name;
      Name.classList.add("post-Name");

      let details = document.createElement("div");
      details.innerHTML = post.details;
      details.classList.add("details");

      // Phone Number
      let phoneNumber = document.createElement("div");
      phoneNumber.innerHTML = post.phoneNumber;
      phoneNumber.classList.add("phone-number");

      // Call Button
      let callButton = document.createElement("a");
      callButton.innerHTML = "Call";
      callButton.href = `tel:${post.phoneNumber}`;
      callButton.classList.add("call-button");

      postCard.appendChild(title);
      postCard.appendChild(image);
      postCard.appendChild(Name);
      postCard.appendChild(details);
      postCard.appendChild(phoneNumber); // Append phone number
      postCard.appendChild(callButton); // Append call button

      postsContainer.appendChild(postCard);
    }
  });
};

createpostListingCards();

postSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createpostListingCards();
});
