@rodents.each do |rodent|
  json.set! rodent.id do
    json.partial! 'rodent', rodent: rodent
  end
end
