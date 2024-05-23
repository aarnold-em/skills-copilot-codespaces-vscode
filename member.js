function skillsMember() {
  const member = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JavaScript'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  };
  return member;
}