# ✅ Testing Guide - Dark Mode & Scroll Reveals

## How to Test Theme Toggle (Dark Mode)

### Location
Look at the **bottom-right area** of your screen. You should see **TWO buttons**:
1. **Scroll to Top** button (appears when you scroll down) - further right
2. **Theme Toggle** button - to the left of the scroll button

### Visual Check
```
Bottom Right Corner:
┌─────────────────────┐
│                     │
│         [🌗] [⬆️]  │  ← Two buttons side by side
│                     │
└─────────────────────┘
```

### Steps to Test:
1. **Refresh your browser** (Cmd+R or Ctrl+R)
2. Wait 1 second (for the button to animate in)
3. Look at **bottom-right** corner
4. You should see a **colorful circular button** with a sun/moon icon
5. **Click it** to toggle between light and dark mode

### What Should Happen:
- ✅ Button shows ☀️ (sun) in light mode
- ✅ Button shows 🌙 (moon) in dark mode
- ✅ Clicking it smoothly transitions the entire site
- ✅ Background changes from white → dark gray
- ✅ Text changes from dark → light
- ✅ Preference is saved (refresh to test)

### Troubleshooting:
**Don't see the button?**
1. Scroll to the very bottom of the page
2. Check if another button is covering it
3. Try zooming out (Cmd/Ctrl + Minus)
4. Open browser console (F12) and look for errors

**Button not clickable?**
1. Try clicking more to the left
2. Make sure you're not clicking the scroll button
3. Wait for the animation to complete (1 second after page load)

---

## How to Test Scroll Reveal Animations

### What to Look For
As you scroll down the page, sections should **blur into focus** with a smooth animation.

### Sections with Scroll Reveals:
1. **About Section** - The image and text content
2. **Skills Section** - The heading and title

### Steps to Test:

#### Test 1: About Section
1. **Refresh the page** (go to top)
2. Scroll down slowly to the "About Me" section
3. **Watch carefully** as you scroll
4. The image should **blur from unfocused → sharp**
5. The text content should also blur in from the right

#### Test 2: Skills Section
1. Continue scrolling down
2. Watch the "Technical Skills" heading
3. It should **blur into view** as it enters the viewport

### What Should Happen:
```
Before Scroll (blurry):
┌─────────────┐
│ ▓▓▓▓▓▓▓▓▓▓  │ ← Content is blurred
│ ▓▓▓▓▓▓▓▓▓▓  │
└─────────────┘

After Scroll (sharp):
┌─────────────┐
│ About Me    │ ← Content is clear
│ Description │
└─────────────┘
```

### Technical Details:
- Animation type: `blurUp` (blurs in from slightly below)
- Duration: 0.8 seconds
- Trigger: When element is ~10% visible in viewport
- Happens: Only once per page load

### Troubleshooting:

**Animations not visible?**
1. Scroll **slowly** - fast scrolling might make you miss it
2. Try refreshing and scrolling again
3. Make sure you're scrolling from the very top
4. The animation triggers once - refresh to see it again

**Animations too fast?**
- They're designed to be subtle (0.8 seconds)
- This is intentional for a professional feel
- Reload page to watch again

**Want to see more animations?**
Currently implemented in:
- About section (image + content)
- Skills section (heading)

You can add more by wrapping any component with:
```jsx
<ScrollReveal animation="blurUp">
  <YourContent />
</ScrollReveal>
```

---

## Quick Visual Test Checklist

### Theme Toggle ✅
- [ ] Button visible at bottom-right
- [ ] Button is to the LEFT of scroll-to-top button
- [ ] Button shows sun icon initially
- [ ] Clicking changes icon to moon
- [ ] Clicking changes background color
- [ ] Clicking changes text color
- [ ] Second click toggles back to light
- [ ] Preference saved after refresh

### Scroll Reveals ✅
- [ ] Refresh page to start at top
- [ ] Scroll slowly to About section
- [ ] About image blurs into view
- [ ] About text blurs into view
- [ ] Continue to Skills section
- [ ] Skills heading blurs into view
- [ ] Animations feel smooth
- [ ] Only happens once per element

---

## Console Commands to Help Debug

Open browser console (F12) and type:

### Check if theme context is working:
```javascript
// Check what's in localStorage
console.log(localStorage.getItem('portfolio-theme'));
// Should show: "light" or "dark"
```

### Manually toggle theme:
```javascript
// Clear saved theme
localStorage.removeItem('portfolio-theme');
// Then refresh page
```

### Check if ScrollReveal is loaded:
```javascript
// Check in console - should not show errors
// Look for: "React" and "IntersectionObserver"
console.log(typeof IntersectionObserver);
// Should show: "function"
```

---

## Expected Behavior Summary

### Theme Toggle (Dark Mode)
- **Button Position**: Bottom-right, left of scroll button
- **Initial State**: Light mode with sun icon
- **On Click**: Smooth transition to dark mode
- **Visual Changes**: Backgrounds, text, borders all adapt
- **Persistence**: Saves to localStorage

### Scroll Reveals
- **Trigger**: When scrolling into viewport
- **Animation**: Blur from fuzzy → sharp + slight upward movement
- **Duration**: 0.8 seconds (quick but noticeable)
- **Frequency**: Once per page load
- **Performance**: Uses Intersection Observer (performant)

---

## Common Issues & Solutions

### Issue: "I don't see any buttons at the bottom"
**Solution**: 
- Make sure you're looking at the **actual webpage**, not a code editor
- Try scrolling down a bit (scroll button appears at 300px)
- Check browser zoom level (should be 100%)

### Issue: "Buttons are stacked on top of each other"
**Solution**: 
- This is now fixed! Theme toggle is `right-24` (left of scroll button)
- If still overlapping, try refreshing or clearing browser cache

### Issue: "Animations happen too fast to see"
**Solution**: 
- Scroll **very slowly** 
- Refresh page and try again
- They're subtle by design (professional feel)
- Record screen to watch in slow motion

### Issue: "Dark mode doesn't change some elements"
**Solution**: 
- Not all sections have dark mode yet
- We've added it to: About, Skills, main background
- Other sections can be updated with `dark:` classes

---

## Next Steps

Once you've confirmed both features work:

1. ✅ **Theme Toggle Works** → You can add dark mode to more components
2. ✅ **Scroll Reveals Work** → You can add them to more sections

**To add more scroll reveals:**
```jsx
import ScrollReveal from './components/ScrollReveal';

<ScrollReveal animation="blurUp" delay={0.2}>
  <YourComponent />
</ScrollReveal>
```

**To add dark mode to more elements:**
```jsx
className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
```

---

## Video Recording Suggestion

Can't see the animations? Try this:
1. Start screen recording
2. Refresh page
3. Slowly scroll from top to bottom
4. Watch the recording in slow motion
5. You'll see the blur effects clearly!

---

**Both features are now working! Refresh your browser and test them out!** 🚀
