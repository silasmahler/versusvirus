// This is just an example,
// so you can safely delete all default props below

export default {
  failed: 'Action failed',
  success: 'Action was successful',

  stepper: {
    selectPeopleGroup: {
      title: 'Select cooking mates',
      text: 'Please select whether you want to cook with friends or strangers:',
    },
    people: {
      friends: 'Friends',
      strangers: 'Strangers',
    },
    chefWanted: {
      title: 'Chef support wanted?',
      text: 'Please choose if you want to be supported by a professional chef:'
    },
    topics: {
      title: 'Choose topics',
      text: 'Select a topic of your choice',

      start_session: 'Start session!',

      categories: {
        vegetarian: 'Vegetarian',
        vegan: 'Vegan'
      },

      leaf_to_root: 'Leaf to Root',
      leaf_to_root_desc: 'Vegetables from leaf to root, fruit from skin to core: "Leaf to Root" is the nose to tail for plants. More and more culinary delicacies are being made from otherwise little-appreciated vegetable parts such as pea peel or fennel stalks.',
    
      urban_agriculture: 'Urban Agriculture',
      urban_agriculture_desc: 'The city is a conurbation and focal point of consumption. However, many foodstuffs are still produced in the countryside. But there are other ways. Urban Agriculture is committed to a diverse flora and fauna, also and especially in urban settlement areas.'
    },
    buttons: {
      continue: 'Continue',
      back: 'Back'
    },
  },
  errorPage: {
    message: 'Sorry, nothing here... 404',
    back: 'Go back'
  }
}
