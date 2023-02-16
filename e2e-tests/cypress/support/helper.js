class Helper {
    generateUniqId(string) {
        return string + Date.now().toString(4);
    }

    loginToApp() {
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
              username: 'test',
              password: 'sayhello123',
            },
          }).then(() => {
            cy.reload()
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