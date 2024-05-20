document.addEventListener("DOMContentLoaded", function () {
  const chatBoxes = document.querySelectorAll(".chat-box");
  const leftContainer = document.querySelector(".left-container");
  const backChatListButtons = document.querySelectorAll(".back-chat-list");

  function handleResize() {
    if (window.innerWidth <= 750) {
      const rightContainers = document.querySelectorAll(".right-container");

      // Use Array some() method to check if at least one right container lacks the "active" class
      const isAnyRightContainerInactive = Array.from(rightContainers).some(
        (container) => !container.classList.contains("active")
      );

      // Add "active" class to left container only if at least one right container is inactive
      if (isAnyRightContainerInactive) {
        leftContainer.classList.add("active");
      } else {
        leftContainer.classList.remove("active");
      }
    } else {
      leftContainer.classList.remove("active");
    }
  }

  function handleBackChatListClick() {
    const currentRightContainer = this.closest(".right-container");

    currentRightContainer.classList.add("active");

    leftContainer.classList.remove("active");
  }

  function handleChatBoxClick() {
    chatBoxes.forEach(function (chatBox) {
      if (chatBox !== this) {
        chatBox.classList.remove("clicked-chat-box");
      }
    }, this);
  
    const targetId = this.id.replace("chat-", "chat-") + "-target";
  
    const allRightContainers = document.querySelectorAll(".right-container");
    allRightContainers.forEach(function (rightContainer) {
      rightContainer.classList.add("active");
    });
  
    const targetContainer = document.getElementById(targetId);
    targetContainer.classList.remove("active");
  
    if (window.innerWidth <= 750) {
      leftContainer.classList.add("active");
    }
  
    this.classList.add("clicked-chat-box");
  }
  
  chatBoxes.forEach(function (chatBox) {
    chatBox.addEventListener("click", handleChatBoxClick);
  });
  
  chatBoxes.forEach(function (chatBox) {
    chatBox.addEventListener("click", handleChatBoxClick);
  });

  backChatListButtons.forEach(function (backChatListButton) {
    backChatListButton.addEventListener("click", handleBackChatListClick);
  });

  handleResize();

  window.addEventListener("resize", handleResize);
});


document.querySelectorAll(".hide-today").forEach(function (button) {
  button.addEventListener("click", function () {
    const chatId = button.getAttribute("data-chat-id");
    const dayChat = document.querySelector(
      '.day-chat[data-chat-id="' + chatId + '"]'
    );
    const numberHiddenMessages = document.querySelector(
      '.number-hidden-messages[data-chat-id="' + chatId + '"]'
    );

    dayChat.classList.toggle("active");

    numberHiddenMessages.classList.toggle("active");

    button.innerHTML =
      button.innerHTML === "expand_less" ? "expand_more" : "expand_less";
  });
});

//////////////// Local Menu


const chatIconContainers = document.querySelectorAll(".chat-icon-container");

chatIconContainers.forEach(function(container) {
  container.addEventListener("click", function() {
    const markPerson = this.querySelector(".mark-person");
    const personalFilter = document.querySelector(".personal-filters");

    markPerson.classList.toggle("active");
    personalFilter.classList.toggle("active");
  });
});

chatIconContainers.forEach(container => {
  container.addEventListener('mouseenter', () => {
    const closestMenu = container.closest('.friend-message').querySelector('.person-message-menu');
    closestMenu.classList.remove('active');
  });

  container.addEventListener('mouseleave', () => {
    const closestMenu = container.closest('.friend-message').querySelector('.person-message-menu');
    closestMenu.classList.add('active');
  });
});

const personMessageMenus = document.querySelectorAll('.person-message-menu');

personMessageMenus.forEach(menu => {
  menu.addEventListener('mouseenter', () => {
    menu.classList.remove('active');
  });

  menu.addEventListener('mouseleave', () => {
    menu.classList.add('active');
  });

  menu.addEventListener('click', (event) => {
    // Check if the clicked element is not a mark-btn
    if (!event.target.classList.contains('mark-btn')) {
      menu.classList.add('active');
    }

    // Find the closest mark-person and remove its active class
    const closestMarkPerson = menu.closest('.friend-message').querySelector('.mark-person');
    closestMarkPerson.classList.remove('active');
  });
});

/////////////// FILTERS
const hideParticipantsBtns = document.querySelectorAll('.hide-participants');
const focusBtns = document.querySelectorAll('.focus-person-btn');
const yourMsg = document.querySelector('.your-msg');
const dataPersonImgs = document.querySelectorAll('[data-person$="-img"]');
const participants = document.querySelectorAll('.participant');

hideParticipantsBtns.forEach(hideParticipantsBtn => {
  hideParticipantsBtn.addEventListener('click', () => {
    const filterCategory = hideParticipantsBtn.closest('.filter-category');
    const category = filterCategory.getAttribute('category');
    
    hideParticipantsBtn.innerHTML = (hideParticipantsBtn.innerHTML === 'check_box_outline_blank') ? 'done' : 'check_box_outline_blank';
    
    if (hideParticipantsBtn.innerHTML === 'check_box_outline_blank') {
      filterCategory.classList.add('disabled');
      participants.forEach(participant => {
        if (participant.getAttribute('category') === category) {
          participant.classList.add('active');
          participant.classList.add('opacity');
        }
      });
    } else {
      filterCategory.classList.remove('disabled');
      participants.forEach(participant => {
        if (participant.getAttribute('category') === category) {
          participant.classList.remove('active');
          participant.classList.remove('opacity');
        }
      });
    }
  });
});

dataPersonImgs.forEach(img => {
  img.addEventListener('click', function() {
    const person = this.dataset.person.replace('-img', '');
    const matchingMsgs = document.querySelectorAll(`.${person}-msg`);
    const matchingParticipants = document.querySelectorAll(`.${person}-participant`);

    matchingMsgs.forEach(msg => {
      msg.classList.toggle('active');
    });

    matchingParticipants.forEach(participant => {
      participant.classList.toggle('opacity');
    });
  });
});

// Function to handle focus buttons
focusBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const targetPerson = this.dataset.person;
    const targetClass = `${targetPerson}-msg`;
    const allMsgs = document.querySelectorAll('.friend-message, .my-message');

    allMsgs.forEach(msg => {
      if (msg.classList.contains(targetClass)) {
        msg.classList.remove('friend-message');
        msg.classList.add('my-message');
      } else {
        msg.classList.remove('my-message');
        msg.classList.add('friend-message');
      }
    });

    // Disable the 'your' button if 'your-msg' has 'my-message'
    if (yourMsg.classList.contains('my-message')) {
      focusBtns.forEach(btn => {
        if (btn.dataset.person === 'your') {
          btn.disabled = true;
        }
      });
    }
  });
});

const toggleParticipantsButtons = document.querySelectorAll('.toggle-participants');
const categoryCloseIcons = document.querySelectorAll('.category-close-icon');
const participantsMenus = document.querySelectorAll('.participants-menu');

toggleParticipantsButtons.forEach((toggleParticipantsButton, index) => {
  toggleParticipantsButton.addEventListener('click', () => {
    const category = toggleParticipantsButton.closest('.filter-category').getAttribute('category');
    
    participants.forEach(participant => {
      if (participant.getAttribute('category') === category) {
        participant.classList.toggle('active');
      }
    });
    
    categoryCloseIcons[index].innerHTML = (categoryCloseIcons[index].innerHTML === 'keyboard_arrow_left') ? 'keyboard_arrow_right' : 'keyboard_arrow_left';
    participantsMenus[index].classList.toggle("active");
    toggleParticipantsButton.classList.toggle("close");
  });
});

//

const messageContainers = document.querySelectorAll('.message-container');

document.addEventListener('click', event => {
  if (event.target.classList.contains('done-circle')) {
      event.target.innerHTML = (event.target.innerHTML === 'circle') ? 'done' : 'circle';
  }
});

const expandButton = document.getElementById('search-expand');
const reduceButton = document.getElementById('search-reduce');

const inputCategories = document.querySelectorAll('.input-category');

expandButton.addEventListener('click', () => {
    expandButton.classList.remove('search');
    cancelTyping.classList.remove('active');
    
    inputCategories.forEach(category => {
    category.classList.remove('active');
    
    });
    
    reduceButton.classList.remove('active');
});

reduceButton.addEventListener('click', () => {
    expandButton.classList.add('search');
    cancelTyping.classList.add('active');
    
    inputCategories.forEach(category => {
        category.classList.add('active');
    });
    
    reduceButton.classList.add('active');
});

 const searchInput = document.querySelector('.filter-category.input-filter input[type="text"]');
 const cancelTyping = document.getElementById('cancel-typing');
 const searchExpand = document.getElementById('search-expand');

 function removeClasses() {
     cancelTyping.classList.remove('active');
     searchExpand.classList.remove('disabled');
     searchInput.classList.remove('active-type');
 }

 function addClasses() {
     cancelTyping.classList.add('active');
     searchExpand.classList.add('disabled');
     searchInput.classList.add("active-type");
 }

 searchInput.addEventListener('input', function() {
     if (searchInput.value !== "") {
         removeClasses();
     } else {
         addClasses();
     }
 });

 cancelTyping.addEventListener('click', function() {
     searchInput.value = "";
     addClasses(); 
 });

const filterExpandBtn = document.getElementById("filter-expand");
const chatFilters = document.querySelector(".chat-filters");

filterExpandBtn.addEventListener("click", function() {
  chatFilters.classList.toggle("expand");
  if (chatFilters.classList.contains("expand")) {
    filterExpandBtn.innerHTML = "collapse_content";
  } else {
    filterExpandBtn.innerHTML = "expand_content";
  }
});


document.getElementById('open-second-header').addEventListener('click', function() {
  document.querySelector('.first-header').classList.add('active');
  document.querySelector('.second-header').classList.remove('active');
});

document.getElementById('close-second-header').addEventListener('click', function() {
  document.querySelector('.first-header').classList.remove('active');
  document.querySelector('.second-header').classList.add('active');
});

const filterTagAll = document.querySelector('.filter-tag.all');
const categoryAll = document.querySelector('.category-all');
const filterIcon = document.querySelector('.filter-icon');

filterTagAll.addEventListener('click', function() {
    categoryAll.innerHTML = (categoryAll.innerHTML === "הכל") ? "לקוחות מזרח אסיה" : "הכל";
    filterIcon.classList.toggle('gold');
});