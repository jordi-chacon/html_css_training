function scrollToView2() {
  const top =
    document.getElementById('view_2').offsetTop -
    document.getElementsByTagName('nav')[0].offsetHeight;
  window.scrollTo({
    top,
    left: 0,
    behavior: 'smooth',
  });
}

function onClickDownArrow(e) {
  scrollToView2();
}

function getDocumentScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}

/* Limitation: when reloading the site below threshold, #signup_panel element
   will be visible and quickly animate out. Looks ugly.
*/
function maybeAnimateSignupPanelInOrOut(signupPanel) {
  const scrollTop = getDocumentScrollTop();
  const classes = signupPanel.classList;
  const threshold = 350;
  const hiddenClass = 'hidden';
  if (scrollTop < threshold && classes.contains(hiddenClass)) {
    classes.remove(hiddenClass);
  } else if (scrollTop >= threshold && !classes.contains(hiddenClass)) {
    classes.add(hiddenClass);
  }
}

function onScrollWindow(e, signupPanel) {
  maybeAnimateSignupPanelInOrOut(signupPanel);
}

window.onload = function() {
  document.getElementById('down_arrow').onclick = onClickDownArrow;

  const signupPanel = document.getElementById('signup_panel');
  window.onscroll = e => {
    onScrollWindow(e, signupPanel);
  };
};
