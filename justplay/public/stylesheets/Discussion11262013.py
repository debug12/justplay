import httplib
import json

base_url = "api-gw.it.umich.edu"
def get_term_code():
	current_term = "Winter 2014"
	conn = httplib.HTTPConnection(base_url)
	head = {'Authorization': 'Acm1toZZ04D7AX8QiHWHr0W3drQa'}
	conn.request(method= 'GET', url = 'Curriculum/SOC/v1/Terms', )
	r = conn.getresponse()
	data = json.loads(r.read())
	for term in data['getSOCTermsResponse']['Term']:
		if term['TermDescr'] == current_term:
			return term['TermCode']
	raise Exception('Current term not found')
print get_term_code()
while True:
	print time.strftime('%b %d %Y %H:%M:%S')
	for course in courses:
		current, capacity = get_enrollment(term_code, course)
		print courses[course], ': {0} of {1}'.format(current, capacity)
	time.sleep(1)