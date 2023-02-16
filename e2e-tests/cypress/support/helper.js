class Helper {
  generateUniqId(string) {
    return string + (Math.random() + 1).toString(36).substring(2)
  }

  registerAccount() {
    const un = this.generateUniqId("un")
    const pwd = this.generateUniqId("pwd")
    const creds = [un, pwd]

    cy.visit('http://localhost:8000/accounts/login/')

    cy.get('input[name="csrfmiddlewaretoken"]').then(element => {
      const token = element.val()

      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/accounts/register/',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': token
        },
        form: true,
        body: {
          username: un,
          password1: pwd,
          password2: pwd
        },
      })
    })
    return creds
  }

  loginToApp(creds) {
    cy.visit('http://localhost:8000/accounts/login/')

    cy.get('input[name="csrfmiddlewaretoken"]').then(element => {
      const token = element.val()

      cy.request({
        method: 'POST',
        url: 'http://localhost:8000/accounts/login/',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': token
        },
        form: true,
        body: {
          username: creds[0],
          password: creds[1],
        },
      }).then(() => {
        cy.visit('http://localhost:8000/feeds/bookmarked/')
      })
    })
  }

  selectUniqFeed(feedsList) {
    let uniqueFeedUrl = null;

    for (let i = 0; i < feedsList.length; i++) {
      const feed = feedsList[i];

      if (feed[1] === 0) {
        continue;
      }

      feed[1] = 0;
      uniqueFeedUrl = feed[0];
      break;
    }
    return uniqueFeedUrl
  }
}

module.exports = { Helper };