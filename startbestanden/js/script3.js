const socialPlatforms = ["youtube", "instagram", "facebook", "twitter"];
const socialLinks = ["https://www.youtube.com", "https://www.instagram.com/", "https://www.facebook.com/", "https://twitter.com/"];

let ulSocials = document.querySelector("#socials");

for (let i = 0; i < socialPlatforms.length; i++) {
    
    const li = document.createElement('li');
    
    const a = document.createElement('a');
    a.href = socialLinks[i];
    
    const img = document.createElement('img');
    img.src = `assets/icon${socialPlatforms[i]}.png`;
    
    a.append(img);
    li.append(a);
    ulSocials.append(li);
}