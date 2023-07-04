document.addEventListener("DOMContentLoaded", function() {
    // Like button
    const likeButton = document.querySelector(".like-button");
    likeButton.addEventListener("click", function() {
      likeButton.classList.toggle("liked");
    });
    // Follow button
    const followButton = document.querySelector(".follow-button");
    followButton.addEventListener("click", function() {
      followButton.classList.toggle("followed");
    });
  
    // Share button
    const shareButton = document.querySelector(".share-button");
    shareButton.addEventListener("click", function() {
      const shareContent = document.querySelector(".share-content");
      shareContent.style.display = "block";
    });
  
    // Share submit button
    const shareSubmitButton = document.querySelector(".share-submit");
    shareSubmitButton.addEventListener("click", function() {
      const shareContent = document.querySelector(".share-content");
      const fileInput = document.querySelector(".image-input");
      const captionInput = document.querySelector(".caption-input");
      const imagePreview = document.querySelector(".preview-image");
      const captionPreview = document.querySelector(".preview-caption");
  
      // Perform the share action using the selected image and caption
      const imageFile = fileInput.files[0];
      const captionText = captionInput.value;
  
      if (imageFile && captionText.trim() !== "") {
        // Display the image preview
        const reader = new FileReader();
        reader.onload = function(e) {
          imagePreview.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(imageFile);
  
        // Display the caption preview
        captionPreview.textContent = captionText;
  
        // Reset the input fields
        fileInput.value = "";
        captionInput.value = "";
        shareContent.style.display = "none";
      }
    });
  
    // Search button
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", function() {
      const searchInput = document.querySelector("input[type='text']");
      const searchTerm = searchInput.value;
  
      // Perform the search action using the search term
      searchInput.value = "";
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const commentButton = document.querySelector(".comment-button");
    const commentInput = document.querySelector(".comment-input");
    const submitCommentButton = document.querySelector(".submit-comment-button");
    
    commentButton.addEventListener("click", function() {
      commentInput.style.display = "block";
    });
    
    submitCommentButton.addEventListener("click", function() {
      const commentText = commentInput.querySelector("input").value;
      
      if (commentText.trim() !== "") {
        const commentsContainer = document.querySelector(".comments");
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = `
          <span class="username">Me: </span>
          <span class="comment-text">${commentText}</span>
        `;
        commentsContainer.appendChild(newComment);
        commentInput.querySelector("input").value = "";
      }
      
      commentInput.style.display = "none";
    });
  });
  
