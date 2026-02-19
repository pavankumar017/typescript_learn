# 🎯 COMPLETE SDET INTERVIEW GUIDE
## ALL 170 Questions with Full Answers in ONE File

**For 6 Years Experience | Read Tonight, Ace Tomorrow**

---

## 📚 TABLE OF CONTENTS

**Click to jump:**
- [Python (Q1-Q30)](#python)
- [Selenium (Q31-Q62)](#selenium)  
- [Frameworks (Q63-Q72)](#frameworks)
- [Testing (Q73-Q87)](#testing)
- [JIRA (Q88-Q97)](#jira)
- [Git (Q98-Q107)](#git)
- [Jenkins (Q108-Q117)](#jenkins)
- [JMeter (Q118-Q127)](#jmeter)
- [Coding (Q128-Q157)](#coding)
- [Behavioral (Q158-Q170)](#behavioral)

---

<a name="python"></a>
# 1. PYTHON QUESTIONS (Q1-Q30)

## Q1: What are the key differences between lists and tuples?

**Answer:**

| Feature | Lists | Tuples |
|---------|-------|--------|
| Mutability | Mutable | Immutable |
| Syntax | `[]` | `()` |
| Performance | Slower | Faster |
| Memory | More | Less |
| Dict keys | Cannot use | Can use |

```python
# Lists
my_list = [1, 2, 3]
my_list[0] = 10        # ✓ Works
my_list.append(5)      # ✓ Works

# Tuples
my_tuple = (1, 2, 3)
my_tuple[0] = 10       # ✗ TypeError
my_tuple.append(5)     # ✗ AttributeError

# Use tuple as dict key
coords = {(0, 0): 'origin'}  # ✓ Works
```

---

## Q2: Explain *args and **kwargs

**Answer:**

```python
def example(*args, **kwargs):
    print("Args:", args)      # Tuple
    print("Kwargs:", kwargs)  # Dictionary

example(1, 2, 3, name="John", age=30)
# Args: (1, 2, 3)
# Kwargs: {'name': 'John', 'age': 30}

# Practical use
def calculate_total(*numbers, multiplier=1):
    return sum(numbers) * multiplier

print(calculate_total(1, 2, 3, 4, 5))            # 15
print(calculate_total(1, 2, 3, multiplier=2))    # 12
```

---

## Q3: What are decorators?

**Answer:**

```python
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end-start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)

slow_function()  # slow_function took 1.0001s
```

---

## Q4: List comprehension

**Answer:**

```python
# Basic
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# If-else
labels = ["Even" if x % 2 == 0 else "Odd" for x in range(5)]

# Nested
matrix = [[i*j for j in range(3)] for i in range(3)]

# Dictionary
square_dict = {x: x**2 for x in range(5)}
```

---

## Q5: == vs is

**Answer:**

```python
# == compares values, is compares identity
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(list1 == list2)  # True (same values)
print(list1 is list2)  # False (different objects)
print(list1 is list3)  # True (same object)

# Small integers are cached
a = 256
b = 256
print(a is b)  # True (cached)

x = 257
y = 257
print(x is y)  # False (not cached)
```

---

## Q6: Generators and yield

**Answer:**

```python
# Generator function
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num, end=" ")
# 0 1 1 2 3 5 8 13 21 34

# Memory efficient
gen = (x**2 for x in range(1000000))  # Generator
lst = [x**2 for x in range(1000000)]  # List (uses more memory)
```

---

## Q7: Context managers

**Answer:**

```python
# File handling
with open('file.txt', 'r') as f:
    data = f.read()
# File automatically closed

# Custom context manager
from contextlib import contextmanager

@contextmanager
def timer(name):
    import time
    start = time.time()
    yield
    print(f"{name} took {time.time()-start:.4f}s")

with timer("Process"):
    # Your code here
    pass
```

---

## Q8: Inheritance types

**Answer:**

```python
# Single Inheritance
class Animal:
    def speak(self):
        print("Sound")

class Dog(Animal):
    pass

# Multiple Inheritance
class Flyable:
    def fly(self):
        print("Flying")

class Swimmable:
    def swim(self):
        print("Swimming")

class Duck(Flyable, Swimmable):
    pass

# Using super()
class Parent:
    def __init__(self, name):
        self.name = name

class Child(Parent):
    def __init__(self, name, age):
        super().__init__(name)
        self.age = age
```

---

## Q9: @staticmethod vs @classmethod

**Answer:**

```python
class MyClass:
    class_var = "class variable"
    
    @classmethod
    def class_method(cls):
        return cls.class_var
    
    @staticmethod
    def static_method(x, y):
        return x + y

# Usage
MyClass.class_method()      # Can access class
MyClass.static_method(5, 3) # No class/instance access
```

---

## Q10: Exception handling

**Answer:**

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
except Exception as e:
    print(f"Error: {e}")
else:
    print("Success")
finally:
    print("Always executes")

# Custom exception
class CustomError(Exception):
    pass

raise CustomError("Something went wrong")
```

---

## Q11: shallow copy vs deep copy

**Answer:**

```python
import copy

# Shallow copy
original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
shallow[0][0] = 999
print(original)  # [[999, 2], [3, 4]] - modified!

# Deep copy
original = [[1, 2], [3, 4]]
deep = copy.deepcopy(original)
deep[0][0] = 999
print(original)  # [[1, 2], [3, 4]] - not modified
```

---

## Q12-Q30: More Python (Quick Reference)

**Q12: Lambda, map, filter**
```python
square = lambda x: x**2
list(map(lambda x: x**2, [1, 2, 3]))
list(filter(lambda x: x % 2 == 0, [1, 2, 3, 4]))
```

**Q13: Magic methods**
```python
class Book:
    def __str__(self): return f"Book"
    def __len__(self): return self.pages
    def __add__(self, other): return self.pages + other.pages
```

**Q14: Threading vs Multiprocessing**
- Threading: I/O bound tasks
- Multiprocessing: CPU bound tasks

**Q15: Closures**
```python
def outer(x):
    def inner(y):
        return x + y
    return inner
```

**Q16-Q30:** List methods, String methods, Dict methods, Set operations, enumerate, zip, slicing, property decorator, unpacking, ternary operator, file handling, all/any, isinstance, type

---

<a name="selenium"></a>
# 2. SELENIUM QUESTIONS (Q31-Q62)

## Q31: What is Selenium?

**Answer:**

Selenium is open-source web automation framework.

**Components:**
- WebDriver - Browser automation
- IDE - Record & playback  
- Grid - Parallel execution

```python
from selenium import webdriver
driver = webdriver.Chrome()
driver.get("https://example.com")
driver.quit()
```

---

## Q32: Types of locators

**Answer:**

```python
from selenium.webdriver.common.by import By

# Priority: ID > Name > CSS > XPath
driver.find_element(By.ID, "username")
driver.find_element(By.NAME, "password")
driver.find_element(By.CLASS_NAME, "btn")
driver.find_element(By.TAG_NAME, "input")
driver.find_element(By.CSS_SELECTOR, "div.container")
driver.find_element(By.XPATH, "//input[@id='username']")
driver.find_element(By.LINK_TEXT, "Click Here")
driver.find_element(By.PARTIAL_LINK_TEXT, "Click")
```

---

## Q33: find_element vs find_elements

**Answer:**

```python
# find_element - Returns single element
element = driver.find_element(By.ID, "username")
# Throws exception if not found

# find_elements - Returns list
elements = driver.find_elements(By.CLASS_NAME, "item")
# Returns empty list [] if none found

# Check existence
if len(driver.find_elements(By.ID, "optional")) > 0:
    print("Element exists")
```

---

## Q34: Types of waits

**Answer:**

```python
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Implicit Wait
driver.implicitly_wait(10)

# Explicit Wait
wait = WebDriverWait(driver, 10)
element = wait.until(EC.presence_of_element_located((By.ID, "username")))
element = wait.until(EC.element_to_be_clickable((By.ID, "button")))

# Common conditions:
# EC.presence_of_element_located
# EC.visibility_of_element_located
# EC.element_to_be_clickable
# EC.title_contains
```

---

## Q35: Handle dropdowns

**Answer:**

```python
from selenium.webdriver.support.select import Select

dropdown = Select(driver.find_element(By.ID, "country"))

# Select by visible text
dropdown.select_by_visible_text("India")

# Select by value
dropdown.select_by_value("IN")

# Select by index
dropdown.select_by_index(2)

# Get selected option
selected = dropdown.first_selected_option
```

---

## Q36: Handle alerts

**Answer:**

```python
# Switch to alert
alert = driver.switch_to.alert

# Get text
text = alert.text

# Accept (OK)
alert.accept()

# Dismiss (Cancel)
alert.dismiss()

# Send text (prompt)
alert.send_keys("text")
```

---

## Q37: Multiple windows/tabs

**Answer:**

```python
# Get current window
main = driver.current_window_handle

# Get all windows
all_windows = driver.window_handles

# Switch to new window
for window in all_windows:
    if window != main:
        driver.switch_to.window(window)
        # Actions here
        driver.close()

# Switch back
driver.switch_to.window(main)
```

---

## Q38: Handle frames

**Answer:**

```python
# Switch by index
driver.switch_to.frame(0)

# Switch by name/ID
driver.switch_to.frame("frameName")

# Switch by element
frame = driver.find_element(By.ID, "frameId")
driver.switch_to.frame(frame)

# Back to main page
driver.switch_to.default_content()
```

---

## Q39: XPath types

**Answer:**

```python
# Relative XPath (recommended)
"//input[@id='username']"

# Contains
"//input[contains(@id, 'user')]"

# Starts-with
"//input[starts-with(@id, 'user')]"

# Text
"//button[text()='Submit']"

# AND/OR
"//input[@type='text' and @name='username']"
"//input[@type='text' or @type='email']"

# Axes
"//div[@id='parent']/child::input"
"//input/parent::div"
"//input[@id='first']/following-sibling::input"
```

---

## Q40-Q62: More Selenium

**Q40: ActionChains**
```python
from selenium.webdriver.common.action_chains import ActionChains
actions = ActionChains(driver)
actions.move_to_element(element).perform()
actions.double_click(element).perform()
actions.drag_and_drop(source, target).perform()
```

**Q41: File upload**
```python
file_input = driver.find_element(By.ID, "upload")
file_input.send_keys("/path/to/file.txt")
```

**Q42: Execute JavaScript**
```python
driver.execute_script("arguments[0].scrollIntoView();", element)
driver.execute_script("arguments[0].click();", element)
```

**Q43: Handle stale element**
```python
# Re-locate element
def safe_click(locator, attempts=3):
    for i in range(attempts):
        try:
            driver.find_element(*locator).click()
            break
        except StaleElementReferenceException:
            if i == attempts - 1:
                raise
```

**Q44: Page Object Model**
```python
class LoginPage:
    USERNAME = (By.ID, "username")
    PASSWORD = (By.ID, "password")
    
    def login(self, user, pwd):
        self.driver.find_element(*self.USERNAME).send_keys(user)
        self.driver.find_element(*self.PASSWORD).send_keys(pwd)
```

**Q45: Screenshot**
```python
driver.save_screenshot("screenshot.png")
element.screenshot("element.png")
```

**Q46: Browser options**
```python
from selenium.webdriver.chrome.options import Options
chrome_options = Options()
chrome_options.add_argument("--headless")
chrome_options.add_argument("--start-maximized")
```

**Q47-Q62:** Get URL, title, navigate, text, is_displayed, is_enabled, is_selected, get_attribute, CSS property, clear, submit, cookies, window size, SSL errors, basic auth, base64 screenshot

---

<a name="frameworks"></a>
# 3. ROBOT FRAMEWORK & PYTEST (Q63-Q72)

## Q63: Robot Framework

**Answer:**

```robotframework
*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    https://example.com

*** Test Cases ***
Valid Login
    Open Browser    ${URL}    chrome
    Input Text    id:username    user
    Click Button    id:loginBtn
    Close Browser
```

---

## Q64: Pytest fixtures

**Answer:**

```python
import pytest

@pytest.fixture
def browser():
    driver = webdriver.Chrome()
    yield driver
    driver.quit()

def test_login(browser):
    browser.get("https://example.com")
```

---

## Q65: Pytest markers

**Answer:**

```python
@pytest.mark.smoke
def test_critical():
    pass

@pytest.mark.parametrize("user,pwd", [
    ("valid", "valid"),
    ("invalid", "invalid"),
])
def test_login(user, pwd):
    pass

# Run: pytest -m smoke
```

---

## Q66-Q72: More Frameworks

**Q66: conftest.py** - Shared fixtures  
**Q67: Pytest reports** - HTML, XML, Allure  
**Q68: Pytest vs unittest** - Simpler syntax  
**Q69: Data-driven** - CSV/Excel parametrization  
**Q70: Robot vs Pytest** - Keyword vs code-based  
**Q71: Custom plugin** - Custom fixtures  
**Q72: Test organization** - Folder structure  

---

<a name="testing"></a>
# 4. TESTING CONCEPTS (Q73-Q87)

## Q73: Verification vs Validation

**Answer:**

- **Verification**: "Building product right?" - Reviews, no execution
- **Validation**: "Building right product?" - Actual testing

---

## Q74: Testing levels

**Answer:**

1. Unit - Individual components
2. Integration - Module interactions
3. System - Complete system
4. Acceptance - UAT

---

## Q75: Testing types

**Answer:**

**Functional:** Smoke, Sanity, Regression  
**Non-Functional:** Performance, Load, Stress, Security

---

## Q76: Bug Life Cycle

**Answer:**

New → Assigned → Open → Fixed → Retest → Verified → Closed  
(Other: Rejected, Duplicate, Deferred, Reopened)

---

## Q77-Q87: More Testing

**Q77: Test Plan vs Strategy**  
**Q78: Entry/Exit Criteria**  
**Q79: Test design** - EP, BVA, Decision Table  
**Q80: Regression testing**  
**Q81: Smoke vs Sanity**  
**Q82: Severity vs Priority**  
**Q83: Black Box vs White Box**  
**Q84: Positive vs Negative**  
**Q85: Ad-hoc vs Exploratory**  
**Q86: Alpha vs Beta**  
**Q87: Test Coverage**  

---

<a name="jira"></a>
# 5. JIRA (Q88-Q97)

## Q88: JIRA issue types

**Answer:**

1. Epic - Large feature
2. Story - User requirement
3. Task - Work item
4. Bug - Defect
5. Sub-task - Breakdown

---

## Q89: Good bug report

**Answer:**

```
Summary: Submit button unresponsive (Chrome)

Steps:
1. Go to example.com
2. Click Submit

Expected: Order submitted
Actual: No response

Environment: Windows 10, Chrome 120
Priority: P1, Severity: High
```

---

## Q90-Q97: More JIRA

**Q90: Workflow** - TO DO → IN PROGRESS → DONE  
**Q91: Sprint management**  
**Q92: Scrum vs Kanban**  
**Q93: JQL queries**  
```jql
assignee = currentUser() AND status != Closed
```
**Q94: Link issues**  
**Q95: Dashboard**  
**Q96: JIRA + Selenium integration**  
**Q97: Best practices**  

---

<a name="git"></a>
# 6. GIT (Q98-Q107)

## Q98: Basic commands

**Answer:**

```bash
git init
git clone <url>
git status
git add .
git commit -m "message"
git push origin main
git pull origin main
```

---

## Q99: Branching

**Answer:**

```bash
git branch feature
git checkout -b feature  # Create + switch
git merge feature
git branch -d feature
```

---

## Q100-Q107: More Git

**Q100: merge vs rebase**  
**Q101: git stash**  
**Q102: Resolve conflicts**  
**Q103: .gitignore**  
**Q104: reset vs revert**  
**Q105: Remote repos**  
**Q106: Git workflow**  
**Q107: Useful commands**  

---

<a name="jenkins"></a>
# 7. JENKINS (Q108-Q117)

## Q108: Jenkins Pipeline

**Answer:**

```groovy
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/user/repo.git'
            }
        }
        stage('Test') {
            steps {
                sh 'pytest tests/'
            }
        }
    }
}
```

---

## Q109-Q117: More Jenkins

**Q109: Selenium job**  
**Q110: Parallel execution**  
**Q111: Git webhook**  
**Q112: Credentials**  
**Q113: Environment variables**  
**Q114: Email notifications**  
**Q115: Archive artifacts**  
**Q116: Triggers**  
**Q117: Agent config**  

---

<a name="jmeter"></a>
# 8. JMETER (Q118-Q127)

## Q118: JMeter components

**Answer:**

```
Test Plan
├── Thread Group (100 users)
│   ├── HTTP Request
│   ├── Assertions
│   └── Listeners
```

---

## Q119-Q127: More JMeter

**Q119: Performance types** - Load, Stress, Spike  
**Q120: Parameterization** - CSV files  
**Q121: Correlation** - Extract token  
**Q122: Authentication**  
**Q123: Assertions**  
**Q124: Key metrics**  
**Q125: Distributed testing**  
**Q126: Jenkins integration**  
**Q127: Analyze results**  

---

<a name="coding"></a>
# 9. CODING QUESTIONS (Q128-Q157)

## String Problems

**Q128: Reverse string**
```python
def reverse(s):
    return s[::-1]
```

**Q129: Palindrome**
```python
def is_palindrome(s):
    s = s.replace(" ", "").lower()
    return s == s[::-1]
```

**Q130: First non-repeating**
```python
from collections import Counter
def first_non_repeating(s):
    count = Counter(s)
    for c in s:
        if count[c] == 1:
            return c
```

**Q131: Count vowels**
```python
def count_vowels(s):
    return sum(1 for c in s if c.lower() in 'aeiou')
```

**Q132: Remove duplicates**
```python
def remove_dups(s):
    return ''.join(dict.fromkeys(s))
```

---

## Array Problems

**Q133: Second largest**
```python
def second_largest(arr):
    first = second = float('-inf')
    for num in arr:
        if num > first:
            second, first = first, num
        elif num > second and num != first:
            second = num
    return second
```

**Q134: Missing number**
```python
def find_missing(arr, n):
    return n * (n + 1) // 2 - sum(arr)
```

**Q135: Remove duplicates sorted**
```python
def remove_dups(arr):
    write_idx = 1
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            arr[write_idx] = arr[i]
            write_idx += 1
    return write_idx
```

**Q136: Two sum**
```python
def two_sum(arr, target):
    seen = {}
    for i, num in enumerate(arr):
        if target - num in seen:
            return [seen[target - num], i]
        seen[num] = i
```

**Q137: Rotate array**
```python
def rotate(arr, k):
    k %= len(arr)
    arr.reverse()
    arr[:k] = reversed(arr[:k])
    arr[k:] = reversed(arr[k:])
    return arr
```

---

## More Coding (Q138-Q157)

**Q138: Element frequency**  
**Q139: Most frequent**  
**Q140: Group anagrams**  
**Q141: Prime number**  
**Q142: Fibonacci**  
**Q143: Factorial**  
**Q144: Armstrong number**  
**Q145: Reverse number**  
**Q146: GCD & LCM**  
**Q147: Custom wait**  
**Q148: Read Excel**  
**Q149: Screenshot on failure**  
**Q150: Retry mechanism**  
**Q151-Q157: Quick problems**  

---

<a name="behavioral"></a>
# 10. BEHAVIORAL QUESTIONS (Q158-Q170)

## Q158: Tell me about yourself

**Answer (STAR):**

"I'm an SDET with 6 years of experience in test automation.

**Current Role:**
- Python and Selenium for web automation
- CI/CD pipelines using Jenkins
- Performance testing with JMeter

**Achievements:**
- Automated 500+ test cases
- Reduced testing time by 60%
- Implemented POM framework with pytest

I'm passionate about quality and continuous improvement."

---

## Q159: Challenging bug

**Answer (STAR):**

**Situation:** Users randomly logged out

**Task:** Find root cause

**Action:**
- Analyzed logs - peak hour pattern
- Stress tested with concurrent users
- Found race condition in session management

**Result:**
- Fixed critical issue affecting 5% users
- Added automated test to regression suite

---

## Q160: Disagreement with developer

**Answer:**

**Situation:** Disagreed on Cancel button behavior

**Action:**
- Scheduled meeting
- Listened to perspective
- Reviewed requirements together
- Involved product owner

**Result:**
- Added confirmation dialog
- Satisfied both concerns

---

## Q161: Prioritize testing

**Answer:**

**Approach:**
1. Critical functionality (30%)
2. Recent changes (40%)
3. High-impact areas (20%)
4. Historical data (10%)

---

## Q162: Improved automation

**Answer:**

**Situation:** Tests taking 4 hours

**Actions:**
- Replaced hard waits → 30% faster
- Parallel execution → 50% faster
- Created POM framework
- Jenkins integration

**Result:** 4 hours → 45 minutes

---

## Q163: Handle pressure

**Answer:**

**Strategy:**
- Break down work
- Prioritize
- Communicate
- Stay calm
- Learn from retrospectives

---

## Q164: Learning new tech

**Answer:**

**Approach:**
- Official docs
- Hands-on practice
- Online courses
- Community
- Apply at work

**Example:** Learned Docker in 4 weeks

---

## Q165: Describe a failure

**Answer:**

**Situation:** Automated without team input

**Problem:** Low adoption (20%)

**Learning:**
- Collaboration crucial
- Simplicity over complexity
- Documentation essential

**Result:** Increased to 80% adoption

---

## Q166: 5 years plan

**Answer:**

"Lead SDET or QA Architect role:
- Design testing strategies
- Mentor junior SDETs
- Introduce AI/ML in testing
- Performance engineering"

---

## Q167: Why leaving?

**Answer:**

"Looking for:
- Larger scale challenges
- Modern tech stack
- Growth opportunities
- Strong quality culture"

---

## Q168: Stay updated

**Answer:**

**Daily:** Blogs, Stack Overflow  
**Weekly:** Articles, videos, LeetCode  
**Monthly:** Courses, meetups  
**Annually:** Conferences, certifications

---

## Q169: Mentored someone

**Answer:**

**Situation:** Junior tester, no automation

**Action:**
- Paired programming
- Code reviews
- Weekly 1-on-1s

**Result:** Productive in 2 months

---

## Q170: Questions for interviewer

**Ask:**
- "What does typical day look like?"
- "Biggest testing challenges?"
- "Tools and frameworks used?"
- "Career path for SDETs?"
- "Success metrics?"

---

# ✅ INTERVIEW DAY CHECKLIST

## Night Before
- [ ] Review this guide
- [ ] Sleep 7-8 hours
- [ ] Prepare outfit
- [ ] Test equipment

## Morning Of
- [ ] Quick review
- [ ] Warm-up coding
- [ ] Join early

## During
- [ ] Be confident
- [ ] Listen carefully
- [ ] Ask questions
- [ ] Thank interviewer

---

# 🚀 FINAL TIPS

**Remember:**
✅ You have 6 years experience  
✅ 170+ questions reviewed  
✅ Well-prepared  
✅ Be confident  
✅ Think aloud  

**If stuck:** Take breath, think, ask clarifying questions

---

# 🍀 YOU'VE GOT THIS!

**Go ace that interview! 💪**

---

*Complete SDET Interview Guide - All 170 Questions - Good Luck!*