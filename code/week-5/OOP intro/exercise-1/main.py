
from ast import And
import string


def compare_insensetive(s1, s2):
    return s1.casefold() == s2.casefold()


def compare_punctuation(s1, s2):
    remove = string.punctuation + string.whitespace
    return s1.translate(remove) == s2.translate(remove)


class YouTubeLessonManager:

    def __init__(self):
        self.lessons = {}
        self.counter = {}

    def save(self, name, url):
        self.lessons[name] = url

    # def get(self, lesson_name):
    #     return self.lessons[lesson_name]

    def get(self, lesson_name):
        for key in self.lessons.keys():
            if compare_insensetive(key, lesson_name) or compare_punctuation(key, lesson_name):
                return self.lessons[key]


lesson_manager = YouTubeLessonManager()
# ex 1
print(lesson_manager.lessons)
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")

# ex 2

# outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}
print(lesson_manager.lessons)
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.lessons["For-Loops"])

# ex 3

# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("For-Loops"))

# ex 4

# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for-loops"))
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("fOr-LooPS"))

# ex 5
print(lesson_manager.get("for-loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA' 
print(lesson_manager.get("for loops")) # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'