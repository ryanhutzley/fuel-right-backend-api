puts "destroying data"

User.destroy_all
User.reset_pk_sequence

User.create(name: "Ryan", email: "ryanhutzley@gmail.com", password: "asdf", weight: 210)
