export function getMemberMock() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem('member') || '[]'));
    }, 1000);
  });
}

export function addMemberMock(member) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const members = JSON.parse(localStorage.getItem('member') || '[]');
      members.push(member);
      localStorage.setItem('member', JSON.stringify(members));
      resolve(member);
    }, 1000);
  });
}

export function updateMemberMock(member) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const members = JSON.parse(localStorage.getItem('member') || '[]');
      const index = members.findIndex((m) => m.id === member.id);
      members[index] = member;
      localStorage.setItem('member', JSON.stringify(members));
      resolve(member);
    }, 1000);
  });
}

export function deleteMemberMock({id}) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const members = JSON.parse(localStorage.getItem('member') || '[]');
      const index = members.findIndex((m) => m.id === id);
      members.splice(index, 1);
      localStorage.setItem('member', JSON.stringify(members));
      resolve(id);
    }, 1000);
  });
}
