import 'package:flutter/material.dart';

void main() => runApp(TestlineApp());

class TestlineApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Testline'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Mascot Image
            Container(
              height: 200,
              width: 200,
              child: Image.asset('assets/mascot.png'), // Add your mascot image here
            ),
            SizedBox(height: 20),
            Text(
              'Welcome back! Let’s ace your next test!',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 40),
            ElevatedButton(
              onPressed: () {
                // Navigate to test or quiz page
              },
              child: Text('Start Studying'),
            ),
          ],
        ),
      ),
    );
  }
}
