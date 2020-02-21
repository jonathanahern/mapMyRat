# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Rodent.delete_all
Tour.delete_all
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

t1 = Tour.create!(
    user_id: u1.id,
    name: 'Sewer Tour',
    distance: 5.3,
    description: "I will gather all the rodents for my mutant fighting crew",
    map_img_url: ""
)

r1 = Rodent.create!(
    tour_id: t1.id,
    lat: 40.676138,
    lng: 73.978784,
    species: 'raccoon',
    ord: 0
)

r2 = Rodent.create!(
    tour_id: t1.id,
    lat: 40.669207,
    lng: 73.986288,
    species: 'other',
    ord: 1
)

r3 = Rodent.create!(
    tour_id: t1.id,
    lat: 40.672695,
    lng: 73.970614,
    species: 'squirrel',
    ord: 2
)

u2 = User.create!(
    first_name: "Chuck E",
    last_name: "Cheese",
    email: "cheese@email.com",
    password: "password",
    img_url: "https://media1.fdncms.com/riverfronttimes/imager/u/slideshow/2580211/chuckecheese.jpg",
    gender: "M",
    birthday: Date.new(1977, 5, 17),
    country: "United States"
)

t2 = Tour.create!(
    user_id: u2.id,
    name: 'Woohoo Tour',
    distance: 1.3,
    description: "It's every one's birthday!!!",
    map_img_url: "https://www.silive.com/resizer/IkvWNU-tE8e0NAgL7xlIWvJhGl0=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.silive.com/home/silive-media/width600/img/latest_news/photo/screen-shot-2017-10-07-at-110726-ampng-013ec1ddbc5c0b18.png"

)

r4 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.676138,
    lng: 73.978784,
    species: 'raccoon',
    ord: 0
)

r5 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.669207,
    lng: 73.986288,
    species: 'rat',
    ord: 1
)

r6 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.672695,
    lng: 73.970614,
    species: 'squirrel',
    ord: 2
)

r16 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.676138,
    lng: 73.978784,
    species: 'raccoon',
    ord: 0
)

r15 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.669207,
    lng: 73.986288,
    species: 'rat',
    ord: 1
)

r14 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.672695,
    lng: 73.970614,
    species: 'squirrel',
    ord: 2
)

r19 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.676138,
    lng: 73.978784,
    species: 'other',
    ord: 3
)

r18 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.669207,
    lng: 73.986288,
    species: 'rabbit',
    ord: 4
)

r17 = Rodent.create!(
    tour_id: t2.id,
    lat: 40.672695,
    lng: 73.970614,
    species: 'other',
    ord: 5
)

u3 = User.create!(
    first_name: "Pizza",
    last_name: "Rat",
    email: "pizza@email.com",
    password: "password",
    img_url: "https://i.ytimg.com/vi/0BfxLjx34Vk/hqdefault.jpg",
    gender: "M",
    birthday: Date.new(2016, 5, 17),
    country: "United States"
)

t3 = Tour.create!(
    user_id: u3.id,
    name: 'Pizza Posse',
    distance: 2.7,
    description: "PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA PIZZA",
    map_img_url: ""
)

r5 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.676138,
    lng: 73.978784,
    species: 'rat',
    ord: 0
)

r6 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.669207,
    lng: 73.986288,
    species: 'rat',
    ord: 1
)

r7 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.672695,
    lng: 73.970614,
    species: 'rat',
    ord: 2
)

r8 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.676138,
    lng: 73.978784,
    species: 'rat',
    ord: 3
)

r9 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.669207,
    lng: 73.986288,
    species: 'rat',
    ord: 4
)

r10 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.672695,
    lng: 73.970614,
    species: 'rat',
    ord: 5
)

r11 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.676138,
    lng: 73.978784,
    species: 'rat',
    ord: 6
)

r12 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.669207,
    lng: 73.986288,
    species: 'rat',
    ord: 7
)

r13 = Rodent.create!(
    tour_id: t3.id,
    lat: 40.672695,
    lng: 73.970614,
    species: 'rat',
    ord: 8
)

