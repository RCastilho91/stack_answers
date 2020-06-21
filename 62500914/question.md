I'm having some problems to apply the property 'border:none' in the safari browser. I've tried to apply a css class named 'profile-label', that has a property 'border:none' into a tag 'label', like in the code bellow:

    .profile-label {
    border: none;
    cursor: pointer;
    }

    <label for="photo" class="profile-label" type="submit">
        <img src="https://picsum.photos/536/354" alt="Foto" width="50" height="50" class="profile-photo" /> 
        <input type="file" id="photo" hidden  name="ProfileImage"/>
    </label>

That property doesn't work properly in safari (border: none), however works well in all others browsers. Does anyone know why?