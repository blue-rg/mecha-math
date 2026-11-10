// ===== 선생님이 채우는 파일 =====
// 1) 파이어베이스 콘솔 → 프로젝트 설정 → 내 앱(웹 </>) → 'SDK 설정 및 구성'의 firebaseConfig 값을 아래에 그대로 붙여 넣어요.
// 2) databaseURL이 꼭 있어야 해요(Realtime Database를 만든 뒤 생겨요).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDAC5G-5FGk1QmEGtwvFdfk_PYZ0SC0fqQ",
  authDomain: "math-mecha.firebaseapp.com",
  databaseURL: "https://math-mecha-default-rtdb.firebaseio.com/",
  projectId: "math-mecha",
  storageBucket: "math-mecha.firebasestorage.app",
  messagingSenderId: "1006831117036",
  appId: "1:1006831117036:web:874cb217c89d5548217bc9"
};
// 선생님 메뉴 비밀번호(기록·코인 초기화, 기록 내려받기). 비워 두면 선생님 메뉴가 꺼져요.
// 주의: 이 파일은 누구나 볼 수 있어서 완벽한 잠금은 아니에요. 학생에게 이 파일 주소를 알려 주지 마세요.
window.TEACHER_PIN = '6264';
