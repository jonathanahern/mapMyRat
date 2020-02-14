# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

u1 = User.create!(
    first_name: "Splinter",
    last_name: "Master",
    email: "splinter@email.com",
    password: "password",
    img_url: "https://2.bp.blogspot.com/-dycn845ZXYM/VI-zguBRHNI/AAAAAAAAGs0/5-9lrbb96QU/s1600/19636-19052.jpg",
    gender: "M",
    birthday: Date.new(1990, 3, 30),
    country: "United States"
)