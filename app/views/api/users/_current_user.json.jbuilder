json.users do
	json.set! current_user.id do 
		json.extract! current_user, :id, :f_name, :l_name
	end
end 