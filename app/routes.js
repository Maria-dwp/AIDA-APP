const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/customer-answer', function (req, res) {

    
    var passYes = req.session.data['customer_answer']
    
    // Check whether the variable matches a condition
    if (passYes == "Yes"){
      // Send user to next page
      res.redirect('success')
    } else {
      // Send user to ineligible page
      res.redirect('failure')
    }
  
  })

module.exports = router
