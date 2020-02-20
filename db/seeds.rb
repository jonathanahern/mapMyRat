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
    name: 'Park Slope Tour',
    distance: 1.3,
    description: "so fun",
    map_img_url: "https://drzetlglcbfx.cloudfront.net/routes/thumbnail/2889986923/1581209600?&size=274x156"
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
    species: 'rat',
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
    name: 'Party in Staten!',
    distance: 3.3,
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