var EmployeeModel = Backbone.Model.extend({
  defaults:{
    status: false
  },

  success: function(){
    this.set('status', true);
    this.trigger('success', this);
  }  
});


// var EmployeeModel = Backbone.Model.extend({
//   url: 'https://api.angel.co/1/startups/187453/roles?role=employee',
//   // parse: function(response) {
//   //     return response.results;
//   // },
//   sync: function(method, model, options) {
//       var that = this;
//           var params = _.extend({
//               type: 'GET',
//               dataType: 'jsonp',
//               url: that.url,
//               processData: false
//           }, options);

//       return $.ajax(params);
//   }
// });

// var employeeModel = new EmployeeModel();

// employeeModel.fetch({
//   success: function(model) {
//     console.log(employeeModel.get('attributes'));
//     console.log(model);
//     console.log('success!');
//     console.log(model.get('attributes'));
//   },
//   error: function(model, xhr, options) {
//     console.log('Fetch error');
//   }
// });





//In this example, the RESTful /todo url will return a todo item in JSON format. For the server to know which todo item to fetch from the database an id parameter is required when doing the request. Let's just say that the server responds with the following JSON:

// {
//   id: 1,
//   description: 'Pick up milk',
//   done: false
// }
// Fetching from server
// To pull the server data into a Backbone model, we call the fetch method:
// Parsing response from server
// If the response from the server is formatted differently than our model, for example it looks like:

// {
//   todo: {
//     id: 1,
//     desc: 'Pick up milk',
//     done: false
//   }
// };
// We can easily parse the response from the server:

// var TodoItem = Backbone.Model.extend({
//   parse: function(response) {
//     response = response.todo;
//     response.description = response.desc;
//     delete response.desc;
//     return response;
//   }
// });

// var todoItem = new TodoItem(data, {parse: true});





// // Define the model
// Tweet = Backbone.Model.extend();

// // Define the collection
// Tweets = Backbone.Collection.extend(
//     {
//         model: Tweet,
//         // Url to request when fetch() is called
//         url: 'http://search.twitter.com/search.json?q=Hamburg&rpp=5&lang=all',
//         parse: function(response) {
//             return response.results;
//         },
//         // Overwrite the sync method to pass over the Same Origin Policy
//         sync: function(method, model, options) {
//             var that = this;
//                 var params = _.extend({
//                     type: 'GET',
//                     dataType: 'jsonp',
//                     url: that.url,
//                     processData: false
//                 }, options);

//             return $.ajax(params);
//         }
//     });

// // Define the View
// TweetsView = Backbone.View.extend({
//     initialize: function() {
//       _.bindAll(this, 'render');
//       // create a collection
//       this.collection = new Tweets;
//       // Fetch the collection and call render() method
//       var that = this;
//       this.collection.fetch({
//         success: function () {
//             that.render();
//         }
//       });
//     },
//     // Use an extern template
//     template: _.template($('#tweetsTemplate').html()),

//     render: function() {
//         // Fill the html with the template and the collection
//         $(this.el).html(this.template({ tweets: this.collection.toJSON() }));
//     }
// });

// var app = new TweetsView({
//     // define the el where the view will render
//     el: $('body')
// });