@tours.each do |tour|
  json.set! tour.id do
    json.partial! 'tour', tour: tour
  end
end

